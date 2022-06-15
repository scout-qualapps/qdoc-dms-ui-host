import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface TreeViewNode {
  name: string;
  iconName: string;
  class: string;
  folderColor: string,
  children?: TreeViewNode[];
}

const TREE_DATA: TreeViewNode[] = [
  {
    name: 'Repository 1',
    iconName: 'repo',
    class: 'repo-icon',
    folderColor: '',
    children: 
    [
      {
        name: 'Folder 1',
        iconName: 'folder',
        class: 'folder-icon',
        folderColor: 'red',

        children:
        [
          {
            name: 'Folder 1.1',
            iconName: 'folder',
            class: 'folder-icon',
            folderColor: 'green',
          }
        ]
      }, 
      {
        name: 'Folder 2',
        iconName: 'folder',
        class: 'folder-icon',
        folderColor: '',
        children:
        [
          {
            name: 'Folder 2.1', 
            iconName: 'folder',
            class: 'folder-icon',
            folderColor: '',
          }
        ]
      }, 
      {
        name: 'Folder 3',
        iconName: 'folder',
        class: 'folder-icon',
        folderColor: 'blue',
        children: 
        [
          {
           name: 'Folder 3.1', 
           iconName: 'folder',
           class: 'folder-icon',
           folderColor: '',
           children:
           [
             {
              name: 'Folder 3.1.1', 
              iconName: 'folder',
              class: 'folder-icon',
              folderColor: '',
             },

           ]
          },
          {
            name: 'Folder 3.2', 
            iconName: 'folder',
            class: 'folder-icon',
            folderColor: '',
            children:
           [
             {
              name: 'Folder 3.2.1', 
              iconName: 'folder',
              class: 'folder-icon',
              folderColor: '',
             },
           ]
          }
          
        ]
      }
    ],
  },
  {
    name: 'Repository 2',
    iconName: 'repo-icon',
    class: 'repo-icon',
    folderColor: '',
    children: [
      {
        name: 'Folder 2.1',
        iconName: 'folder',
        class: 'folder-icon',
        folderColor: '',
      },
    ],
  },
  {
    name: 'Repository 3',
    iconName: '',
    class: 'repo-icon',
    folderColor: '',
    children: [
      {
        name: 'Folder 3.1',
        iconName: 'folder',
        class: 'folder-icon',
        folderColor: '',
      },
    ],
  },

];

interface TreeViewFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  iconName: string;
  folderColor: string;
  class: string;
}

 @Component({
  selector: 'app-move-copy',
  templateUrl: './move-copy-modal.component.html',
  styleUrls: ['./move-copy-modal.component.scss'],

})
export class MoveCopyModalComponent {

  activeNode:any;

  private _transformer = (node: TreeViewNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      iconName: node.iconName,
      class: node.class,
      folderColor: node.folderColor,
    };
  };

  treeControl = new FlatTreeControl<TreeViewFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: TreeViewFlatNode) => node.expandable;
}
