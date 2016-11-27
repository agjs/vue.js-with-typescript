import * as Vue from "vue";
import { expect } from 'chai';
import MyComponent from '../src/component.vue'


describe('MyComponent', () => {
  it('has a created hook', () => {
    expect(typeof MyComponent.created).to.equal('function')
  });
});

describe('MyComponent', () => {

  it('sets the correct default data', () => {
    expect(typeof MyComponent.data).to.equal('function')
    const defaultData = MyComponent.data()
    expect(defaultData.message).to.equal('hello!')
  });

  it('correctly sets the message when created', () => {
    const vm = new Vue(MyComponent).$mount()
    expect(vm.message).to.equal('bye!')
  });

  it('renders the correct message', () => {
    const Ctor = Vue.extend(MyComponent)
    const vm = new Ctor().$mount()
    expect(vm.$el.textContent).to.equal('bye!');
  });

});