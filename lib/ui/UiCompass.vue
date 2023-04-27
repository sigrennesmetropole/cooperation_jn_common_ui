<script setup lang="ts">
import IconCompass from '../icons/IconCompass.vue'
import { ref, onMounted, watch } from 'vue'
import { defineProps, defineEmits } from 'vue'
import '../css/navigation.css'

const props = defineProps({
  vpPitch: Number,
  vpHeading: Number,
})

const compass = ref<HTMLDivElement | null>(null)
const arrow = ref<HTMLDivElement | null>(null)
const emit = defineEmits(['headingMap', 'tiltingMap'])

onMounted(() => {
  if (props.vpHeading !== 0) {
    transformNorthPoint(props.vpHeading as number)
  }
  if (props.vpPitch !== 0) {
    transformArrow(props.vpPitch as number)
  }
})

watch(
  () => props.vpHeading,
  () => {
    transformNorthPoint(props.vpHeading as number)
  }
)

watch(
  () => props.vpPitch,
  () => {
    transformArrow(props.vpPitch as number)
  }
)

const transformNorthPoint = (angle: number) => {
  if (compass.value && arrow.value) {
    angle = Math.round(angle)
    compass.value.style.transform = `rotate(${-angle}deg)`
    const parentElement = arrow.value.parentNode as HTMLDivElement
    parentElement.style.transform = `rotate(${angle}deg)`
  }
}

const transformArrow = (tilt: number) => {
  if (arrow.value) {
    const initialTilt = -90
    tilt = Math.round(initialTilt - tilt)
    arrow.value.style.transform = `rotateX(${tilt}deg)`
  }
}

const trackMouse = (
  // Dirty hack: eslint triggers a unused-vars false positive
  // eslint-disable-next-line no-unused-vars
  callback: (e: MouseEvent) => Promise<void>,
  endCallback: Function = () => {}
) => {
  document.body.addEventListener('mousemove', callback)
  document.body.addEventListener('mouseup', () => {
    document.body.removeEventListener('mousemove', callback)
    endCallback()
  })
}

function onNorthPointClick() {
  if (!compass.value || !arrow.value) return
  const timestamp = Date.now()
  const clickDuration = 100
  const { top, left, height, width } = compass.value.getBoundingClientRect()

  const compassPos = {
    x: left + width / 2,
    y: top + height / 2,
  }

  trackMouse(
    async (e) => {
      const angleRadians = Math.atan2(
        compassPos.x - e.clientX,
        compassPos.y - e.clientY
      )
      const angle = (180 / Math.PI) * angleRadians
      transformNorthPoint(angle)
      emit('headingMap', { angle: angle, animate: false })
    },
    () => {
      if (Date.now() - timestamp < clickDuration) {
        emit('headingMap', { angle: 0, animate: true })
      }
    }
  )
}

function onCompassClick() {
  if (!arrow.value) return
  const { top, height } = arrow.value.getBoundingClientRect()
  const yPos = top + height / 2

  trackMouse(async (e) => {
    const speed = 0.5
    const initialTilt = -90
    const maxTilt = -15 // arbitrary
    const tilt = (yPos - e.clientY) * speed + initialTilt
    if (tilt < initialTilt || tilt > maxTilt) {
      return
    }
    transformArrow(tilt)
    emit('tiltingMap', { tilt: tilt })
  })
}
</script>

<template>
  <div
    ref="compass"
    class="orbit h-[75px] w-[75px] border-4 border-white rounded-full flex justify-center items-center absolute bottom-0 shadow-lg"
  >
    <div
      class="h-3 w-3 flex justify-center items-center text-[8px] bg-black text-white absolute bottom-[65px] cursor-pointer rounded"
      @mousedown="onNorthPointClick"
    >
      N
    </div>
    <div>
      <div
        data-title="Navigation 3D"
        ref="arrow"
        class="h-[54px] w-[54px] bg-white rounded-[100%] z-10 cursor-pointer flex justify-center items-center text-black text-xs shadow-md"
        @mousedown="onCompassClick"
      >
        <IconCompass />
      </div>
    </div>
  </div>
</template>

<style scoped>
.orbit {
  animation: compassInit 150ms;
  perspective: 1500px;
}

@keyframes compassInit {
  0% {
    height: 10px;
    width: 10px;
  }

  100% {
    height: 100px;
    width: 100px;
  }
}
</style>
