class Hello {
  constructor(
    private readonly id: number,
    private readonly message: string
  ) {}

  helloWorld() {
    return `Say: ${this.message} with id is ${this.id}`;
  }
}

export { Hello };
