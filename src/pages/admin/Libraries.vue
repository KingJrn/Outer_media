<template>
  <Navigation>
    <div id="content">
        <div class="main-container">
            <h3>You are logged in as a <span>Super Admin</span></h3>
            <div class="top-items">
                <div class="left-side">
                    <input type="text" placeholder="search">
                    <select name="" id="">
                        <option value="8">display : 8</option>
                    </select>
                    <div class="help">
                        <p>Help</p>
                        <img src="@/assets/images/vectors/question.svg" alt="">
                    </div>
                </div>
                <div class="right-side">
                    <a href="/addlibrary">Add New Library</a>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Library Type</th>
                    <th scope="col">Published</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="library in libraries" :key="library.id">
                        <td>{{ library.name }}</td>
                        <td>{{ library.type }}</td>
                        <td>Yes <Switch/></td>
                        <td class="action">
                            <a href="">Edit</a>
                            <a href=""><img src="@/assets/images/vectors/delete.svg" alt=""></a>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </Navigation>
</template>

<script>
import Switch from '@/layouts/partials/Switch.vue';
import Navigation from '@/layouts/Navigation.vue';
import apiServices from "@/services/apiServices.js";
export default {
  name: 'LibrariesView',
  components: {
    Navigation,
    Switch,
  },
  data() {
        return {
            userData:this.$store.state.user,
            dialog: false,
            libraries:[],
        }
    },
    mounted(){
        this.getLibraries()
    },
    methods:{
        getLibraries() {
            apiServices.getLibraries((response) => {
                if (response && response.success == true) {
                this.libraries = response.data;
                console.log(this.libraries)
                // console.log(JSON.parse(this.orders[0].products))
                }
            });
        },
    }
}
</script>

<style lang="scss" scoped>
  #content{
    height: 100%;
    width: 100%;
    padding: 40px;

    .main-container{
        width: 100%;
        height: 100%;
        background: #FFFFFF;
        border: 2px solid rgba(0, 0, 0, 0.07);
        box-shadow: 2px 4px 24px 1px rgba(0, 0, 0, 0.1);
        border-radius: 11px;
        padding: 20px 60px 20px 60px;


        .top-items{
            display: flex;
            justify-content: space-between;

            a{
                background: #111C39;
                border: 3px solid rgba(27, 17, 55, 0.22);
                border-radius: 6px;
                height: 50px;
                color: white;
                padding: 10px;
                text-decoration: none;
            }

            .left-side{
                display: flex;
                gap: 20px;

                input{
                background: #F9FBFF;
                border: 1px solid rgba(0, 0, 0, 0.12);
                border-radius: 10px;
                height: 40px;
                }
                select{
                    background: #F9FBFF;
                    border: 1px solid rgba(0, 0, 0, 0.12);
                    border-radius: 10px;
                }
                .help{
                    display: flex;
                    gap: 10px;
                    align-items: center;

                    p{
                        margin: 0px;
                        font-family: 'Poppins';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 24px;
                         color: rgba(0, 0, 0, 0.71);
                    }
                }
            }
            
        }

        table{
            margin-top: 45px;
            width: 100%;

            td{
                padding: 10px;
            }
            th{
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
                letter-spacing: -0.01em;
                color: #B5B7C0;
            }

            .action{
                display: flex;
                gap: 30px;
                align-items: center;

                a{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 20px;
                    color: #191E9E;
                    text-decoration: none;
                }

                button{
                    background: #1B1137;
                    border: 3px solid rgba(27, 17, 55, 0.16);
                    border-radius: 4px;
                    color: white;
                }


            }
        }
    }
  }
</style>
