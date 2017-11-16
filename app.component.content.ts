import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template:`
        <main>
            <section>
            <article>
                <h2>This is my first website design</h2>
                <p>
                    We provide very useful user interface (UI) courses for students learning and practicing.Please join us for fun, knowledge and bright future!
                </p>
            </article>

            </section>
        </main>
            <hr>
  `,
  styleUrls: ['./app.component.css']
})
export class ContentComponent {
  title = 'content';
}


