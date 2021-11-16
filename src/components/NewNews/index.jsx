import React from 'react';
import { Redirect } from "react-router";

import api from '../../services/api';

import TextEditor from '../TextEditor';
import Button from '../form/Button';
import FormInput from '../form/Input';
import FormSelect from '../form/Select';

import './style.css';


export default class NewNews extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            text: '',
            listVal: [],
            headline: '',
            caption: '',
            category: '',
            image: '',
            inputErrheadline: '',
            errheadline: '',
            inputErrCaption: '',
            errCaption: '',
            inputErrCategory: '',
            errUserCategory: '',
            inputErrBodyNews: '',
            errBodyNews: '',
            redirect: false

        }
    }

    handleChange = (event) =>{
        this.setState({ [event.target.name]: event.target.value });
    }

    postForm = async (dataForm) => {
        const headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const { data } = await api.post('news/create', dataForm, headers);
            return data;
        } catch (e) {
            let res = {
                status: e.response.status,
                err: e.response.data
            }
            return res;
        }
    }

    handleSubmit = async (event)=>{
        event.preventDefault();

        const dados = {
            news: {
                headline: this.state.headline,
                caption: this.state.caption,
                bodyNews: this.state.text,
                      category: {
                            category_name: this.state.category
                        },
                image: this.state.image
            }
        }

        var retorno = true

        if(!dados.news.headline){
            this.setState({
                inputErrheadline: "inputErr",
                errheadline: 'Preencha com o Título da Notícia'
            })    
            retorno = false            
        } else {
            this.setState({
                inputErrheadline: "",
                errheadline: ''
            })    
            retorno = true  
        }

        if(!dados.news.caption){
            this.setState({
                inputErrCaption: "inputErr",
                errCaption: 'Preencha com o Sub-Título da Notícia'
            })    
            retorno = false            
        } else {
            this.setState({
                inputErrCaption: "",
                errCaption: ''
            })    
            retorno = true  
        }

        if(!dados.news.bodyNews){
            this.setState({
                inputErrBodyNews: "inputErr",
                errBodyNews: 'Preencha com o Sub-Título da Notícia'
            })    
            retorno = false           
        } else {
            this.setState({
                inputErrBodyNews: "",
                errBodyNews: ''
            })    
            retorno = true 
        }

        if(!dados.news.category.category_name){
            this.setState({
                inputErrCategory: "inputErr",
                errUserCategory: 'Selecione uma Categoría'
            })    
            retorno = false            
        } else {
            this.setState({
                inputErrCategory: "",
                errUserCategory: ''
            })    
            retorno = true 
        }

        if (retorno) {
            const response = await this.postForm(dados);
            if (!response.error) {
                this.setState({
                    redirect: true
                })
            }
        }
        return retorno
        
    }

    handleChangeTextEditor = (value) => {
        this.setState({ text: value })
    }

    handleChange = (event) =>{
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount(){
        const headers = {
          headers: {
          'Content-Type': 'application/json'
          }
        }
        api.get('/news/categories/', {}, headers)
        .then(res =>{
          let result = res.data.map(val=>{
              return val.category.category_name
          })
          this.setState({
            listVal: result
          });
        })
        .catch(e =>{
          this.setState({
            listVal: e.data
          });
        })
    }
    
    render(){
        
        let val = this.state.listVal
        val = JSON.stringify(val);
        return (
            <div className="content-page">
                { this.state.redirect ? <Redirect to="/admin/news" /> : ''}
                <div className="page-title">
                    <h1>{this.props.titleEditor}</h1>
                </div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="container-editor">
                        <FormInput
                            id="headline"
                            nameItem="headline"
                            label="Título"
                            type="text"
                            placeholder="Digite Um Título"
                            nameTarget={(e) => this.handleChange (e)}
                            classErr={this.state.inputErrheadline}
                            errMessage={this.state.errheadline}
                        />
                        <FormInput
                            id="caption"
                            nameItem="caption"
                            label="Sub-título"
                            type="text"
                            placeholder="Digite Um Sub-título"
                            nameTarget={(e) => this.handleChange (e)}
                            classErr={this.state.inputErrCaption}
                            errMessage={this.state.errCaption}
                        />
                        <FormSelect 
                            id="category"
                            nameItem="category"
                            label="Categoria"
                            nameSelecione="Uma Categoria"
                            listOption={val}
                            nameTarget={(e) => this.handleChange (e)}
                            classErr={this.state.inputErrCategory}
                            errMessage={this.state.errUserCategory}
                        />
                        <TextEditor
                            nameTarget={(value) => this.handleChangeTextEditor(value)}
                            text={this.state.text}
                            classErr={this.state.inputErrBodyNews}
                            errMessage={this.state.errBodyNews}                            
                        />
                        <Button
                            id=""
                            name=""
                            labelName="Criar Notícia"
                            classes="btn-green"
                        />
                    </div>
                </form>
           </div>
        );
    }
}
