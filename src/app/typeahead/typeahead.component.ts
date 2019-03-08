import { Component, OnInit } from '@angular/core';
import { GithubService } from '../shared/services/github.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {

  githubForm: FormGroup;

  constructor(private githubService: GithubService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.githubForm.valueChanges.subscribe((value) => {
      if (value && value.username) {
        console.log(value.username);
        this.githubService.getUserRepos(value.username);
      }
    });
  }

  createForm() {
    this.githubForm = this.fb.group({
      username: [''],
    });
  }

}
