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
          "yaw": 0.1270396610465987,
          "pitch": 0.44560136985780474,
          "rotation": 15.707963267948973,
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
          "yaw": -2.1955208156786608,
          "pitch": -0.006785469559654089,
          "rotation": 18.84955592153877,
          "target": "0-cozinha"
        },
        {
          "yaw": 0.049448306361107086,
          "pitch": 0.07298285045106567,
          "rotation": 0,
          "target": "2-quarto"
        },
        {
          "yaw": 0.25031547488011974,
          "pitch": 0.09878021073261856,
          "rotation": 7.853981633974483,
          "target": "4-banheiro"
        },
        {
          "yaw": -0.18713921225934804,
          "pitch": 0.09426581952277857,
          "rotation": 4.71238898038469,
          "target": "3-quarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-quarto",
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
          "yaw": 3.064114041529967,
          "pitch": 0.39546802268729486,
          "rotation": 12.566370614359176,
          "target": "1-salacopa"
        },
        {
          "yaw": -2.94031474518491,
          "pitch": 0.027176696988721716,
          "rotation": 1.5707963267948966,
          "target": "3-quarto"
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
          "yaw": 2.4690811563989348,
          "pitch": 0.3761089530010473,
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
          "yaw": 1.6111084024424045,
          "pitch": 0.03401799328353938,
          "rotation": 0,
          "target": "3-quarto"
        },
        {
          "yaw": 1.984313203677483,
          "pitch": 0.043530302125635245,
          "rotation": 1.5707963267948966,
          "target": "2-quarto"
        },
        {
          "yaw": 1.5417202682825248,
          "pitch": 0.612510443899529,
          "rotation": 4.71238898038469,
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
