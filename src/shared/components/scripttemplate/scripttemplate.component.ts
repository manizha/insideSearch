import { Component, ElementRef, ViewChild, Input, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var _: any;

@Component({
    selector: 'script-template',
    templateUrl: './scripttemplate.component.html'
})
export class ScriptTemplateComponent {

    @Input()
    id: string;

    @Input()
    class: string;

    @Input()
    src: string;

    @Input()
    type: string;

    @Input()
    dataCondition: string;

    @ViewChild('script') script: ElementRef;

    constructor(private _sanitizer: DomSanitizer){}

    renderScript() {
        var element = this.script.nativeElement;
        var script = document.createElement("script");

        if (this.id) {
            script.id = this.id;
        }

        if (this.class) {
            script.className = this.class;
        }

        script.type = this.type ? this.type : "text/javascript";

        if (this.src) {
            script.src = this.src;
        }

      if (this.dataCondition) {
        script.setAttribute("data-conditon", this.dataCondition);
      }

        if (element.innerHTML) {
            script.innerHTML = _.unescape(element.innerHTML);
        }

        var parent = element.parentElement;
        parent.parentElement.replaceChild(script, parent);
    }

    ngAfterViewInit() {
        this.renderScript();
    }
}
