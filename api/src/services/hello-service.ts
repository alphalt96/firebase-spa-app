import { Hello } from '../shared/entities';

class HelloService {
  constructor(
    // private readonly firestoreLib: any
  ) {}

  getHello() {
    const newHello = new Hello(1, 'say something');
    console.log(newHello.helloWorld());
  }
}

export { HelloService };
