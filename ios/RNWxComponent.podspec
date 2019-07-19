Pod::Spec.new do |s|
  s.name         = "RNWxComponent"
  s.version      = "0.0.1"
  s.summary      = "无星的组件库"
  s.homepage     = "git@github.com:XingXiaoWu/react-native-wx-component.git"
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "wuxing" => "329106954@qq.com" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "git@github.com:XingXiaoWu/react-native-wx-component.git", :tag => "master" }
  s.source_files  = "RNWxComponent/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  
  