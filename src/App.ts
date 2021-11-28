import { 
  WebGLRenderer,
  PerspectiveCamera
} from 'three';
import { Scene } from './Scene';
import { Canvas } from './Canvas';
import { Cube } from './Cube';
import { WebXR } from './WebXR';
import { Engine } from './Engine';

export interface IWebXRApp {
  scene: Scene;
  canvas: Canvas;
  renderer: WebGLRenderer;
  xr: WebXR; 
  engine: Engine;
  camera: PerspectiveCamera;
  userTrigger: HTMLButtonElement;
}

export class App implements IWebXRApp {
  scene: Scene;
  canvas: Canvas;
  renderer: WebGLRenderer;
  xr: WebXR; 
  engine: Engine;
  camera: PerspectiveCamera = new PerspectiveCamera();
  userTrigger: HTMLButtonElement = document.querySelector('.xr-trigger');

  constructor(scene: Scene, canvas: Canvas, xr: WebXR, engine: Engine) {
    this.scene = scene;
    this.canvas = canvas;
    this.xr = xr;
    this.engine = engine;
    this.init();
  }

  get getRenderer(): WebGLRenderer {
    return this.renderer;
  }

  private async init():Promise<void> {


    this.userTrigger.addEventListener('click', async () => {
      this.renderer = new WebGLRenderer({
        alpha: true,
        preserveDrawingBuffer: true,
        canvas: this.canvas.getElement,
        context: this.canvas.getContext
      });      

      this.renderer.autoClear = false;
      this.camera.matrixAutoUpdate = false;
  


      await this.xr.start(this.canvas.getContext);
      this.engine.init(this);
      this.xr.getSession.requestAnimationFrame(this.engine.onXRFrame);

      setTimeout(() => {
        const cube = new Cube();
        console.log(cube.getCube)
        this.scene.add(cube.getCube);
      }, 1000)
    });
  } 
}