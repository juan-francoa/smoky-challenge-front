import React from 'react'

export default function Shopping() {
  return (
    <div>
      <section class="orden__container body-container-shopping">
        <h2 className='title text-white mb-4'>Shopping</h2>
    <div className='orden__completa'>
    <div class="orden__productos">
        <div class="producto__item">
        <div class="producto">
            <img src="https://www.freevap.ch/36405-medium_default/vape-pen-disposable-elf-bar-600-strawberry-ice-elf-bar.jpg" alt="Vape Pen Disposable"/>
            <p>Vape Pen Disposable</p>
              <div class="producto__monto">
                <p>$7,00</p>
              </div>
        </div>
        </div>
        </div>
        </div>
        <div class="shopping__sumatoria">
        <div class="orden__concepto">
        <p>Total</p>
        </div>
        <div class="orden__monto">
        <p>$ 50.00</p>
        </div>
    </div>
    <button class="btn-link btn">BUY</button>
    </section>
    </div>
  )
}
