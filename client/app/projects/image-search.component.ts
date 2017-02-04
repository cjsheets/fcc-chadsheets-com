import { Component } from '@angular/core';
import { Logger } from '../shared/logger.service';

@Component({
  selector: 'file-metadata',
  templateUrl: './file-metadata.view.html',
})
export class FileMetadataComponent { 

  constructor(
    private _log: Logger
  ) {}

  // href: xxx, link-value: xxx
  private scrollNav = [
    {h: 'project-title', v: 'File Metadata', s: [
        {h: 'try-it', v: 'In Action'}
      ]},
    {h: 'more-information', v: 'Additional Info', s: [
        {h: 'limitations', v: 'Limitations'},
        {h: 'user-story', v: 'User Story'},
        {h: 'to-do', v: 'To-Do'}
      ]},
  ];
}