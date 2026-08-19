---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18140" onclick="CopyToClipboard('tag18140');return false;" class="tag-decoration">v2</div><div id="tag12706" onclick="CopyToClipboard('tag12706');return false;" class="tag-decoration">v2-9ae9357</div><div id="tag22987" onclick="CopyToClipboard('tag22987');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag16234" onclick="CopyToClipboard('tag16234');return false;" class="tag-decoration">v2-v2</div><div id="tag2987" onclick="CopyToClipboard('tag2987');return false;" class="tag-decoration">v2-v2.2</div><div id="tag9352" onclick="CopyToClipboard('tag9352');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/9ae93578d0de04f081e840e4bfbeee518f9a5cd8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147774445" target="_blank">2026-08-18 14:20:50</a></td></tr>
<tr><td><div id="tag20453" onclick="CopyToClipboard('tag20453');return false;" class="tag-decoration">v2-develop</div><div id="tag64" onclick="CopyToClipboard('tag64');return false;" class="tag-decoration">v2-develop-1d5cd40</div><div id="tag19446" onclick="CopyToClipboard('tag19446');return false;" class="tag-decoration">v2-develop-2.2.0-develop.151</div><div id="tag28006" onclick="CopyToClipboard('tag28006');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag28216" onclick="CopyToClipboard('tag28216');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag965" onclick="CopyToClipboard('tag965');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1d5cd40a8ebf6a6c37cfb5259069f66221f50f39" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32312260048" target="_blank">2026-08-19 23:12:31</a></td></tr>
<tr><td><div id="tag4357" onclick="CopyToClipboard('tag4357');return false;" class="tag-decoration">v3</div><div id="tag29207" onclick="CopyToClipboard('tag29207');return false;" class="tag-decoration">v3-70a11f6</div><div id="tag14666" onclick="CopyToClipboard('tag14666');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag10066" onclick="CopyToClipboard('tag10066');return false;" class="tag-decoration">v3-v3</div><div id="tag27832" onclick="CopyToClipboard('tag27832');return false;" class="tag-decoration">v3-v3.3</div><div id="tag27576" onclick="CopyToClipboard('tag27576');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/70a11f68215f03019a2b3cb906ba2e96d4631bf3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147772700" target="_blank">2026-08-18 14:20:50</a></td></tr>
<tr><td><div id="tag13468" onclick="CopyToClipboard('tag13468');return false;" class="tag-decoration">v3-develop</div><div id="tag18501" onclick="CopyToClipboard('tag18501');return false;" class="tag-decoration">v3-develop-eca2b2f</div><div id="tag15291" onclick="CopyToClipboard('tag15291');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1176</div><div id="tag5744" onclick="CopyToClipboard('tag5744');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag3943" onclick="CopyToClipboard('tag3943');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag9174" onclick="CopyToClipboard('tag9174');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/eca2b2fbacb45bc14758377692e7752551da55f1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32269371943" target="_blank">2026-08-19 15:19:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
