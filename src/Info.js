import React from "react";

export default function Info() {
  return (
    <div className="">
      <p>
        этот калькулятор считает с использованием eval(), он выполняет код из
        строки, поэтому можно написать что нибудь типо: alert("Lorem ipsum"), и
        получить уведомление от сайта и потом получить undefined или вывести в
        консоль что-то и проверить (console.log("it works")) и еще поэтому он не
        считает проценты(( (Ага, не баг, а фича!) Да, еще он сделан с
        использованием библиотеки редакс, да, для калькулятора я использовал
        стейт менеджмент! вот ссылка на гитхаб:
        https://github.com/Magnific86/calculator
      </p>
    </div>
  );
}