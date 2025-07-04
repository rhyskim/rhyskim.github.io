source "https://rubygems.org"

# GitHub Pages에서 권장하는 방식
gem "github-pages", group: :jekyll_plugins

# 플랫폼 별 추가 설정 (Windows 대응 등)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# 로컬 개발 서버 구동을 위한 필요 gem
gem "webrick", "~> 1.9"
