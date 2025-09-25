var APP_DATA = {
  "scenes": [
    {
      "id": "0-cobertura",
      "name": "Cobertura",
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
          "yaw": 1.4415151108471402,
          "pitch": 0.406430507357598,
          "rotation": 3.141592653589793,
          "target": "1-cozinha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cozinha",
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
          "yaw": -0.4402200964807754,
          "pitch": 0.1635858300010753,
          "rotation": 3.141592653589793,
          "target": "2-salacopa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salacopa",
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
          "yaw": -0.04912260689310699,
          "pitch": -0.011602987471459159,
          "rotation": 0,
          "target": "3-quarto"
        },
        {
          "yaw": 0.12048862225553947,
          "pitch": -0.013834991671163976,
          "rotation": 1.5707963267948966,
          "target": "4-quarto"
        },
        {
          "yaw": -0.24235674724723388,
          "pitch": -0.017788064739519882,
          "rotation": 4.71238898038469,
          "target": "5-banheiro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-quarto",
      "name": "Quarto",
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
          "yaw": 2.8558970150147545,
          "pitch": 0.3863907796888455,
          "rotation": 0,
          "target": "2-salacopa"
        },
        {
          "yaw": 2.695240340902405,
          "pitch": 0.055035932282027744,
          "rotation": 4.71238898038469,
          "target": "4-quarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-quarto",
      "name": "Quarto",
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
          "yaw": -2.505069368266879,
          "pitch": 0.29290105852600945,
          "rotation": 0,
          "target": "2-salacopa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-banheiro",
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
          "yaw": -1.5220001758984552,
          "pitch": 0.16363499065258402,
          "rotation": 0,
          "target": "4-quarto"
        },
        {
          "yaw": -1.008303736100256,
          "pitch": 0.15474959568440383,
          "rotation": 7.853981633974483,
          "target": "2-salacopa"
        },
        {
          "yaw": -1.9639503031199297,
          "pitch": 0.14609459557943083,
          "rotation": 4.71238898038469,
          "target": "3-quarto"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "PreviaCob",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
