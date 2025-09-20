var APP_DATA = {
  "scenes": [
    {
      "id": "0-cozinha",
      "name": "Cozinha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.12404941096116318,
          "pitch": 0.44134845257617883,
          "rotation": 0,
          "target": "1-salacopa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salacopa",
      "name": "SalaCopa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.186320588081779,
          "pitch": -0.05146541005010796,
          "rotation": 0,
          "target": "0-cozinha"
        },
        {
          "yaw": 0.050716205736602404,
          "pitch": 0.04431288192194138,
          "rotation": 0,
          "target": "2-quartosolteiro"
        },
        {
          "yaw": -0.2423241111483776,
          "pitch": 0.05194284254805481,
          "rotation": 0,
          "target": "3-quartocasal"
        },
        {
          "yaw": 0.28812017814968094,
          "pitch": 0.05000571257646236,
          "rotation": 0,
          "target": "4-banheiro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-quartosolteiro",
      "name": "QuartoSolteiro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.916608769857902,
          "pitch": -0.014047660422065178,
          "rotation": 0,
          "target": "3-quartocasal"
        },
        {
          "yaw": 3.0517687081896376,
          "pitch": 0.34117161189264245,
          "rotation": 0,
          "target": "1-salacopa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-quartocasal",
      "name": "QuartoCasal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4911931350371628,
          "pitch": 0.3386996223875389,
          "rotation": 0,
          "target": "1-salacopa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-banheiro",
      "name": "Banheiro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0339938366043393,
          "pitch": 0.031601950466733086,
          "rotation": 0,
          "target": "2-quartosolteiro"
        },
        {
          "yaw": 1.5692803279934529,
          "pitch": 0.039882032472084106,
          "rotation": 0,
          "target": "3-quartocasal"
        },
        {
          "yaw": 1.6563916787530975,
          "pitch": 0.6764598524327905,
          "rotation": 0,
          "target": "1-salacopa"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Previa",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
