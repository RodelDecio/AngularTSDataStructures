import { Component } from '@angular/core';
import { ToolListService } from '../../services/toollist/toollist.service';
import { Tool } from '../../interface/tool';

@Component({
  selector: 'app-toollist',
  templateUrl: './toollist.component.html',
  styleUrls: ['./toollist.component.css'],
})
export class ToolListComponent {
  tools: Tool[] = [];
  id: string = '';
  name: string = '';
  description: string = '';

  constructor(private toolListService: ToolListService) {
    this.tools = this.toolListService.getTools();
  }

  addTool(): void {
    if (this.id && this.name && this.description) {
      this.toolListService.addTool(this.id, this.name, this.description);
      this.id = '';
      this.name = '';
      this.description = '';
    }
  }

  removeTool(index: number): void {
    this.toolListService.removeTool(index);
  }
}
