---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag9079" onclick="CopyToClipboard('tag9079');return false;" class="tag-decoration">nightly</div><div id="tag17827" onclick="CopyToClipboard('tag17827');return false;" class="tag-decoration">nightly-df1c0915d07982546e282b2b52354a49cde993ba</div><div id="tag13487" onclick="CopyToClipboard('tag13487');return false;" class="tag-decoration">nightly-b1d3c04</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/b1d3c04dd5f7f9fd99bb37845d29fd57706dc43e" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20895146103" target="_blank">2026-01-11 12:29:18</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27595" onclick="CopyToClipboard('tag27595');return false;" class="tag-decoration">release</div><div id="tag5373" onclick="CopyToClipboard('tag5373');return false;" class="tag-decoration">release-4.5.5</div><div id="tag23283" onclick="CopyToClipboard('tag23283');return false;" class="tag-decoration">release-9257496</div><div id="tag26242" onclick="CopyToClipboard('tag26242');return false;" class="tag-decoration">release-v4</div><div id="tag24679" onclick="CopyToClipboard('tag24679');return false;" class="tag-decoration">release-v4.5</div><div id="tag24971" onclick="CopyToClipboard('tag24971');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/92574960d9faaff552fbdcc5e40aae290407b40e" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20895146297" target="_blank">2026-01-11 12:29:19</a></td></tr>
<tr><td><div id="tag30618" onclick="CopyToClipboard('tag30618');return false;" class="tag-decoration">testing</div><div id="tag14668" onclick="CopyToClipboard('tag14668');return false;" class="tag-decoration">testing-4.6.0Beta2</div><div id="tag17305" onclick="CopyToClipboard('tag17305');return false;" class="tag-decoration">testing-a637bf5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/a637bf56d67ceb24300df9853351a84a72d8d887" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/20895146417" target="_blank">2026-01-11 12:29:20</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
