'use strict';
{
class Header{
  constructor(main){
    this.main =main;
    this.isOk =false;
    // 変換前の値
    this.option1;
    this.option2;
    this.option3;
    this.optionTotal;
    // 変換後の値
    this.op1=0;
    this.op2=0;
    this.op3=0;
    this.opTotal=0;
    // 要素の取得
    this.lucky = document.getElementById("lucky");
    this.year =document.getElementById("year");
    this.month = document.getElementById("month");
    this.day = document.getElementById("day");
    this.gender = document.querySelectorAll("#gender > input");
    this.name = document.getElementById("name");
    this.btn =document.getElementById("btn");
    this.main =document.querySelector("main");

    // ヘッダー画面が操作されるときはメイン画面が上にいる
    this.main.classList.add("clear");

    // ボタンをクリックした際に値を取得
    this.btn.addEventListener("click",()=>{
      if(this.day.value === ""){
        alert("生年月日を入力してください")
        this.isOk = true;
      }else{
      this.option1 = this.day.value;
      this.gender.forEach(a =>{
        if(a.checked){
          this.option2 = a.value;
        }
      });
      this.option3 =this.name.value;
      this.optionTotal=this.calc1()+this.calc2()+this.calc3();
      this.calcLucky(this.optionTotal)
      main.calc(this.op1,this.op2,this.op3,this.opTotal);
      // console.log(`${this.op1},${this.op2},${this.op3},${this.opTotal}`);
    }
    });
  }
  // それぞれの要素を計算する 
  // 生年月日の計算（奇数＝１、偶数＝２）
  calc1(){
      console.log(typeof(this.option1))
      if(this.option1%2 === 0){
        return this.op1=0;
      }else{
        return this.op1=1;
      }
  }
  // 性別の計算
  calc2(){
    if(this.option2 ==="man"){
      const a = Math.floor(Math.random()*2);
      return this.op2 = a;
    }else{
      const b =Math.floor(Math.random()*2)+2;
      return this.op2=b;
    }
  }
  // 名前の計算
  calc3(){
    if(this.option3.length%2 === 0){
      return this.op3=0;
    }else{
      return this.op3=1;
    }
  }
  // ラッキー度の計算
  calcLucky(a){
    const date = new Date();
    const d =date.getDate()
    if((a*d)%3 ==2){
      return this.opTotal =2
    }else if((a*d)%3 === 1){
      return this.opTotal =1
    }else{
      return this.opTotal =0
    }
    }
  }

class Main {
  constructor(){
    this.header =new Header(this);
    // 要素の取得
    this.lucky =document.getElementById("lucky");
    this.love =document.getElementById("love");
    this.work =document.getElementById("work");
    this.money =document.getElementById("money");
    this.item =document.getElementById("item");

    // 結果の定義
    this.luckyText =["*","**","***"];
    this.loveText =["好きな人に会えます","好きな人に会えません"];
    this.workText =["仕事が成功します","仕事でミスが多発します","仕事でいいことがあります","仕事が遅れます"];
    this.moneyText =["臨時収入を得ます","無駄遣いをします"];
    this.itemText =["コーヒー","ビール","アイス","チョコ","コーラ","お茶"];


  }
  // 文字をそれぞれ表示する
  calc(a,b,c,d){
  this.opTotal = a+ b + c;
  this.lucky.textContent =this.luckyText[d];
  this.love.textContent = this.loveText[a];
  this.work.textContent =this.workText[b];
  this.money.textContent =this.moneyText[c];
  this.item.textContent =this.itemText[this.opTotal];
  }
}
const main =new Main();

// ヘッダー画面の値をクリアする
function clear(){
  main.header.year.value ="";
  main.header.month.value="";
  main.header.day.value="";
  main.header.gender.forEach(a =>{
    a.checked =false;
    });
  main.header.name.value ="";
}
// ヘッダー画面でボタンを押すとメイン画面が現れる
document.getElementById("btn").addEventListener("click",()=>{
  if(main.header.isOk === true){
    main.header.isOk = false;
  }else{
  document.querySelector("main").classList.remove("clear")
  document.querySelector("main").classList.add("NotClear")
  }
});
  // メイン画面でボタンを押すとヘッダー画面が現れる
document.getElementById("returnBtn").addEventListener("click",()=>{
  clear();
  document.querySelector("main").classList.remove("NotClear")
  document.querySelector("main").classList.add("clear")
  scrollTo(0, -200);
  
});
}