import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { TOKEN_KEY } from '@/constant'

type Result<T> = {
  code: number,
  message: string,
  data: T
}

// 导出Request，可以用来自定义传递配置来创建实例
export class Request {
  // axios 实例
  instance: AxiosInstance
  // 基础配置，url和超时时间
  baseConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.BASE_URL + 'api',
    timeout: 60000
  }

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config))

    // -----请求拦截-----
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 将token放在请求头中的Authorization变量中
        const token = localStorage.getItem(TOKEN_KEY) as string
        if (token) {
          config.headers!.Authorization = token
        }

        return config
      },
      (err: any) => {
        // 请求错误，这里可以用全局提示框进行提示
        console.log('请求失败：' + err)
        return Promise.reject(err)
      },
    )
    // -----响应拦截-----
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {

        return res.data
      },
      (err: any) => {
        // 这里用来处理http常见错误，进行全局提示
        let message = "";
        switch (err.response.status) {
          case 400:
            message = "请求错误(400)";
            break;
          case 401:
            message = "未授权，请重新登录(401)";
            // 这里可以做清空storage并跳转到登录页的操作
            break;
          case 403:
            message = "拒绝访问(403)";
            break;
          case 404:
            message = "请求出错(404)";
            break;
          case 408:
            message = "请求超时(408)";
            break;
          case 500:
            message = "服务器错误(500)";
            break;
          case 501:
            message = "服务未实现(501)";
            break;
          case 502:
            message = "网络错误(502)";
            break;
          case 503:
            message = "服务不可用(503)";
            break;
          case 504:
            message = "网络超时(504)";
            break;
          case 505:
            message = "HTTP版本不受支持(505)";
            break;
          default:
            message = `连接出错(${err.response.status})!`;
        }
        return Promise.reject(err.response)
      },
    )
  }

  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Result<T>> {
    return this.instance.get(url, config)
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<Result<T>> {
    return this.instance.post(url, data, config)
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<Result<T>> {
    return this.instance.put(url, data, config)
  }

  public delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<Result<T>> {
    return this.instance.delete(url, config)
  }

}

// 默认导出Request实例
export default new Request({})