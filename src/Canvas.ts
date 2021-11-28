export class Canvas {
  private canvas: HTMLCanvasElement = document.createElement('canvas');
  private context: WebGLRenderingContext = this.canvas.getContext('webgl');

  constructor() {
    this.init();
  }
  
  get getElement(): HTMLCanvasElement {
    return this.canvas;
  }

  get getContext(): WebGLRenderingContext {
    return this.context;
  }

  private init(): void {
    this.create();
  }

  private create(): void {
    this.context.makeXRCompatible();
    document.body.appendChild(this.canvas);
  }
}