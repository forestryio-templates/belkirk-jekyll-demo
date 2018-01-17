// Configures gulp build
// See gulpfile.babel.js for build pipeline
import {resolve} from "path"

export default function(env) {
  const src = "src/"
  const dest = "jekyll/"
  const tmp = ".tmp/"
  const build = "dist/"
  const isProduction = process.env.NODE_ENV === "production"

  return {
    src: src,
    dest: dest,
    tmp: tmp,
    build: build,
    jekyllArgs: {
      default: [
        "--source", resolve(dest), 
        "--destination", resolve(build)
      ],
      development: [
        "-V", 
        "--drafts", 
        "--unpublished", 
        "--future", 
        "--config", "jekyll/_config.yml,jekyll/_config_development.yml"
      ],
      preview: [
        "--config", "jekyll/_config.yml,jekyll/_config_development.yml"
      ],
      production: []
    },
    styles: {
      src:
      [
        src + "css/*.+(css|scss|sass)",
        src + "scss/*.+(css|scss|sass)"
      ],
      watch:
      [
        src + "css/**/*.+(css|scss|sass)",
        src + "scss/**/*.+(css|scss|sass)"
      ],
      dest: dest + "css",
      tmp: tmp + "css"
    },
    scripts: {
      src: src + "js/*+(js|jsx)",
      watch: src + "js/**/*+(js|jsx)",
      dest: dest + "js/",
      tmp: tmp + "js/"
    },
    svg: {
      src: src + "img/**/*.svg",
      watch: src + "img/**/*.svg",
      dest: dest + "svg/",
      config: {
        dest: ".",
        mode: {
          symbol: {
            sprite: "sprite.symbol.svg",
            prefix: "svg-%s",
            dest: "."
          }
        },
        example: (isProduction) ? false : true
      }
    }
  }
}
