import { Component } from '@angular/core';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrls: ['./toollist.component.css']
})
export class ToolListComponent {
  toolList: string[] = ['Hammer', 'Screwdriver', 'Wrench', 'Pliers'];
  tool: string = '';

  addTool(): void {
    if (this.tool.trim()) {
      this.toolList.push(this.tool.trim());
      this.tool = '';
    }
  }

  removeTool(index: number): void {
    this.toolList.splice(index, 1);
  }
}
