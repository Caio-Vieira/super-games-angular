import { Component, OnDestroy } from '@angular/core';
interface MessageWithIcon {
  icon: string;
  message: string;
}

@Component({
  selector: 'app-super-corner',
  templateUrl: './super-corner.component.html',
  styleUrls: ['./super-corner.component.scss']
})
export class SuperCornerComponent implements OnDestroy {

  ngOnDestroy() {
    this.generateNumbers();
    this.revealNumbers();
    this.isNumberDisabled;
    this.toggleNumber;
    this.play();
  }

  generatedNumbers: number[] = [];
  numbersClicked: number[] = [];
  numbersRevealed = false;
  revealIcon = 'fa-regular fa-eye-slash';

  rows: number[][] = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12],
   [13, 14, 15, 16, 17, 18],[19, 20, 21, 22, 23, 24],[25,26, 27, 28, 29, 30]];
  gameResult = {icon: '', message: ''};
  selectdNumberResult = {icon: '', message:''}
  isNumberGenerated: number[][] = [];


  generateNumbers() {
    while (this.generatedNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 30) + 1;
      if (!this.generatedNumbers.includes(randomNumber)) {
        this.generatedNumbers.push(randomNumber);
      }
    }
    this.generatedNumbers.sort((a, b) => a - b);

  }

  revealNumbers() {
    this.numbersRevealed = !this.numbersRevealed;
    this.revealIcon = this.numbersRevealed ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash';
  }

  isNumberDisabled(num: number): boolean {
    const numberGenerated =  this.generatedNumbers.length === 0;
    return numberGenerated;
  }

  toggleNumber(num: number) {
    const index = this.numbersClicked.indexOf(num);
    if (index !== -1) {
      this.numbersClicked.splice(index, 1);
    } else {
      this.numbersClicked.push(num);
    }

  }

  play() {
    if (this.numbersClicked.length === 0 || this.generatedNumbers.length === 0) {
      this.gameResult = { icon: 'fas fa-exclamation-circle fa-1x ', message:
      'Gerar os números ou selecionar na cartela' };
    } else if (this.numbersClicked.toString() === this.generatedNumbers.toString()) {
      this.gameResult = { icon: 'fas fa-circle-check fa-1x ', message:
       `Parabéns! Você ganhou ` };
    } else {
      this.gameResult = { icon: 'fas fa-exclamation-circle fa-1x ', message:
       `Não foi dessa vez` };
    }
    setTimeout(() => {
      this.gameResult = {icon: '', message: ''};
    }, 2000);

  }

  restart() {
    this.numbersClicked = [];
    this.generatedNumbers = [];
  }

}
