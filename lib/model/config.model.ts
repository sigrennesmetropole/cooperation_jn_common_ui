export type ConfigType = {
  common: {
    links: {
      coopterr_link: string
      solar_link: string
      trambus_link: string
      ondes_link: string
      contact_link: string
    }
    address: {
      size_begin_search: number
      nb_addresses_rva: number
      nb_addresses_organization: number
      nb_addresses_communes: number
      nb_addresses_streets: number
    }
    ogcBaseUrl: string
  }
  solar: {
    links: {
      photovoltaique_link: string
      solar_coop_link: string
      energies_link: string
      vilaine_link: string
      url_signe_qualite: string
      choisir_modele_eco: string
    }
    statistics: {
      diduknow_year: number
      diduknow_more_energy: number
      diduknow_more_power: number
    }
    autocalsol: {
      pr: number
      tech: string
      integration: string
      typeConsommateur: string
      typeCompteur: number
      tarifVente: number
      date_prod_conso: string
    }
    solar_panel: {
      solar_panel_surface: number
      solar_panel_power: number
    }
    grid: {
      rectangle_height: number
      rectangle_width: number
    }
    ogcServices: {
      irisLayer: string
      potentialLayer: string
      potentialFilterOnAttribute: string
      potentialSurfaceIdAttribute: string
      roofLayer: string
      roofFilterOnAttribute: string
      roofSurfaceIdAttribute: string
    }
    distance: {
      distance_max_for_selection: number
    }
    consumption: {
      default_consumption: number
    }
  }
  trambus: {
    links: {
      fabrique_citoyenne_CGU_url: string
    }
    ogc: {
      project_planning_base_map_url: string
      project_planning_layer_url: string
    }
    misc: {
      cycling_distance: number
    }
  }
  wave: {
    links: {
      carte_ondes_url: string
      carto_radio_url: string
    }
  }
}
