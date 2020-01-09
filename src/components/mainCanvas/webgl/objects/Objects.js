import { Object3D, RawShaderMaterial } from 'three'

// import { datGui } from '../../utils/debug'
import Bobby from './Bobby'

import vertexShader from './ObjectShader/object.vs'
import fragmentShader from './ObjectShader/object.fs'

/* modifiers
  - n
*/

export default class Objects extends Object3D {
  constructor () {
    super()

    this.initMaterial()
    this.timeScale = 1

    this.n = {
      x: 30,
      y: 15,
      z: 1
    }

    this.init()

    this.keyEvent()

    this.objTab = []

    // Create all the cubes

    for (let i = 0; i < this.n.x; i++) {
      this.objTab.push([])
      for (let j = 0; j < this.n.y; j++) {
        this.objTab[i].push([])
        for (let k = 0; k < this.n.z; k++) {
          const bobby = new Bobby({
            material: this.myMat.clone(),
            shape: 'cube'
          })
          bobby.scale.set(this.objScale.x, this.objScale.y, this.objScale.z)
          this.objTab[i][j].push(bobby)
          this.add(bobby)
        }
      }
    }
    this.changeType()
  }

  init () { // set all the variables
    this.rotationSpeed = {
      x: 0.0,
      y: 0.0,
      z: 0
    }

    this.audioRect = {
      volumeHistory: 0,
      waveData: 1
    }

    this.positionSpeed = {
      x: 1,
      y: 1,
      z: 1,
    }

    this.ampl = {
      x: 0,
      y: 0,
      z: 0,
    }


    this.objScale = {
      x: 1,
      y: 1,
      z: 1
    }

    this.mousePos = {
      x: 0,
      y: 0
    }
    this.colorFade = 0
  }

  keyEvent() { // Get the key events and analyse them
    let stack = ''
    let mode = ''
    let axe = ''
    let minus = 1
    const self = this
    window.addEventListener('keyup', (e) => {
      const key = e.keyCode
      if (key >= 96 && key <= 105) {
        stack += '' + key - 96
      } else if (key >= 48 && key <= 57) {
        stack += '' + key - 48
      } else if (key == 110 || key == 188 || key == 59) {
        stack += '.'
      } else if (key == 109) {
        minus = -minus
      } else if (key == 13) {
        const val = parseFloat(stack) * minus
        switch (mode) {
          case 'r':
            self.rotationSpeed[axe] = val / 180 * Math.PI
            break;
          case 's':
            self.objScale[axe] = val
            break;
          case 'p':
            self.positionSpeed[axe] = val
            break;
          case 'a':
            self.ampl[axe] = val
            break;
          case 'v':
            self.audioRect.volumeHistory = val
            break;
          case 'd':
            self.audioRect.waveData = val
            break;
          case 'c':
            self.colorFade = val
            break;
          case 't':
            self.timeScale = val
            break;
          case 'i':
            this.init()
            break;
          case 'm':
            switch (val) {
              case 1:
                self.setWall()
                break;
              case 2:
                self.setGround()
                break;
              case 3:
                self.setTunnel()
                break;
            }
            break;
        }
        stack = ''
        mode = ''
        axe = 'x'
        minus = 1
      } else if (key == 88 || key == 89 || key == 90) {
        axe = 'xyz'[key - 88]
      } else {
        mode = 'abcdefghijklmnopqrstuvwxyz'[key - 65]
      }
      // console.log('key ' + e.keyCode + ', stack '+ stack + ', mode '+mode+',axe '+axe)
    }, false)
  }

  initMaterial () {
    this.myMat = new RawShaderMaterial({
      uniforms: {
        uTime: { value: 1.0 },
        uPosX: { value: 0.0 },
        uPosY: { value: 0.0 },
        uPosZ: { value: 0.0 },
        uAmplitude: { value: 5.0 },
        uWave: { value: 10.0 },
        uVelocity: { value: 1.0 },
        uFade: { value: 0.5 },
        uMouseX: { value: 0.0 },
        uMouseY: { value: 0.0 }
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader
    })
  }

  updateMousePosition (x, y) { // Update the mouse position from the window referential to the 3D referential
    this.mousePos.x = (x - 0.5) * 20
    this.mousePos.y = (0.5 - y) * 10 - 4.5
  }

  changeType (type) { // Change the cube relative organisation from a string
    switch (type) {
      case 'tunnel':
        this.setTunnel()
        break
      case 'ground':
        this.setGround()
        break
      default:
        this.setWall()
    }
  }

  setWall () { // Set the cube relative organisation like a wall
    for (let i = 0; i < this.n.x; i++) {
      for (let j = 0; j < this.n.y; j++) {
        for (let k = 0; k < this.n.z; k++) {
          const bobby = this.objTab[i][j][k]
          bobby.position.set(0.5 + -this.n.x / 2 + i, -3 + -this.n.y / 2 + j, -this.n.z / 2 + k)
          bobby.initialPosition = bobby.position.clone()
          bobby.scale.set(0.8, 0.8, 0.2)
        }
      }
    }
  }

  setGround () { // Set the cube relative organisation like a ground
    for (let i = 0; i < this.n.x; i++) {
      for (let j = 0; j < this.n.y; j++) {
        for (let k = 0; k < this.n.z; k++) {
          const bobby = this.objTab[i][j][k]
          bobby.position.set(0.5 + -this.n.x / 2 + i, -8 - this.n.z / 2 + k, -3 + -this.n.y / 2 + j)
          bobby.initialPosition = bobby.position.clone()
          bobby.scale.set(2.0, 0.2, 2.0)
        }
      }
    }
  }

  setTunnel () { // Set the cube relative organisation like a tunnel
    for (let i = 0; i < this.n.x; i++) {
      for (let j = 0; j < this.n.y; j++) {
        for (let k = 0; k < this.n.z; k++) {
          const bobby = this.objTab[i][j][k]
          bobby.position.set(Math.cos((i / this.n.x) * (Math.PI * 2)) * (k + 1) * 3, -4 + Math.sin((i / this.n.x) * (Math.PI * 2)) * (k + 1) * 2, 15 - j * 2)
          bobby.initialPosition = bobby.position.clone()
          bobby.scale.set(0.2, 0.1, 1.0)
        }
      }
    }
  }

  update (audio, t) {
    const histLength = audio.volumeHistory.length
    const waveLength = audio.waveData.length
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i]

      // Update the rotation ans position

      child.rotation.set((child.position.x + t) * 0.1 * this.rotationSpeed.x,
        (child.position.y + t) * 0.1 * this.rotationSpeed.y + audio.waveData[Math.round(i / (this.children.length / waveLength))] * this.audioRect.waveData,
        (child.position.z + t) * 0.1 * this.rotationSpeed.z)

      child.position.set(child.initialPosition.x + Math.sin(this.positionSpeed.x * (t + child.initialPosition.y) * 0.1) * this.ampl.x,
        child.initialPosition.y + Math.sin(this.positionSpeed.y * (t + child.initialPosition.z) * 0.1) * this.ampl.y,
        child.initialPosition.z + Math.sin(this.positionSpeed.z * (t + child.initialPosition.x) * 0.1) * this.ampl.z + audio.volumeHistory[histLength - Math.round(i / (this.children.length / histLength))] * this.audioRect.volumeHistory)

      // Update the uniforms value

      child.material.uniforms.uTime.value = t
      child.material.uniforms.uPosX.value = child.position.x
      child.material.uniforms.uPosY.value = child.position.y
      child.material.uniforms.uPosZ.value = child.position.z

      child.material.uniforms.uMouseX.value = this.mousePos.x
      child.material.uniforms.uMouseY.value = this.mousePos.y
      child.material.uniforms.uFade.value = this.colorFade

      // Update the scale

      child.scale.set(this.objScale.x, this.objScale.y, this.objScale.z)
    }
  }
}
