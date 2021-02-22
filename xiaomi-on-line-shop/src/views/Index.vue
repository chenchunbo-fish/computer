//! 主页面
<template>
  <div id="Index">
    <!-- 路由占位符 -->
   <router-view/>
  <!-- 排序 -->
  <button @click="sort">按价格排序</button>
   <!-- 响应式布局 -->
    <el-row>
       <!-- 左侧 -->
      <el-col :span="4">
        <div class="grid-content bg-purple hidden-xs-only">
         
          <!-- 价格 -->
          <p>
            PRICE
          </p>
          
          <ul>
            <!-- 筛选全部的数据 -->
            <li @click="all()">
              all
            </li>
            <!-- 筛选0-100 -->
            <li @click="f(0,100)">
              0-100
            </li>
            <!-- 筛选100-500 -->
            <li  @click="f(100,500)">
              100-500
            </li>
            <!-- 筛选500-1000 -->
            <li  @click="f(500,1000)">
              500-1000
            </li>
            <!-- 筛选1000-2000 -->
            <li  @click="f(1000,2000)">
              1000-2000
            </li>
          </ul>
        
        </div>
      </el-col>

      <!-- 右侧-->
      <el-col :span="20">
        <div class="grid-content bg-purple-light">
          
            <el-row :gutter="10">
              <!-- 循环遍历 of -->
              <el-col  :sm="12" :md="8" :lg="6" v-for="item of list2"  :key="item._id">
                <!-- 定义组件 Product   -->
                <Product :item="item" @aaa="fn"/>
               
              </el-col>
            </el-row>

        </div> 
      </el-col>
    </el-row>

    <!-- 隐藏部分-->

    <el-dialog title="登录" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="300">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="300">
          <el-input v-model="form.pass" autocomplete="off"></el-input>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="login">确 定</el-button>
      </div>
    </el-dialog>


    <!-- 登录成功后显示部分-->

     <el-dialog title="" :visible.sync="dialogFormVisible2">
       <span> 加入购物车成功</span>
      
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">继续购物</el-button>
        <el-button type="primary" @click="cart">查看购物车</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//? 引入子组件
import Product from "../components/product";
export default {
  data() {
    return {
      list: [],
      //*放置的是筛选后的顺序、展示的顺序
      list2: [],
      //*从低到高的默认值
      p: false,
      //* 隐藏的状态
      dialogFormVisible: false,
      dialogFormVisible2:false,
      //*存储用户名和密码
      form: {
        name: "",
        pass: ""
      }
    };
  },
  //! 方法
  methods: {
    //todo  1.筛选0-100、100-500、500-1000、1000-2000的商品数据
    f(a, b) {
      //*过滤当前list数组里面的数据
      let res = this.list.filter(item => {
        //* 找到大于0与小于等于100的后  返回
        return item.salePrice > a && item.salePrice <= b;
      });
      console.log(res);
      //*把返回出的数据 赋值给list2 里面
      this.list2 = res;
    },
    //todo  2.筛选全部的商品数据
    all() {
      this.list2 = this.list;
    },
    //todo 3.排序
    sort() {
      this.p = !this.p;

      if (this.p) {
        this.list2.sort((a, b) => {
          return a.salePrice - b.salePrice;
        });
      } else {
        this.list2.sort((a, b) => {
          return b.salePrice - a.salePrice;
        });
      }
    },
    //todo 状态
    fn(msg) {
      if (msg == 0) {
        this.dialogFormVisible = true;
      }
      if (msg == 1) {
        this.dialogFormVisible2 = true;
      }
    },
    //todo 登录
    login() {
      this.dialogFormVisible = false;
      localStorage.setItem("user", "sd sa aergreyht");

    },

  },

  //! 调用接口
  async created() {
    let { data } = await this.http.get("/data.json");
    //console.log(data);
    this.list = data.result.list;
    this.list2 = data.result.list;
  },
  //! 注册组件
  components: {
    Product
  }
};
</script>
<style lang="scss" scoped>
#Index {
  width: 100%;
}
</style>

