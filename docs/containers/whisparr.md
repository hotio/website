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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21307" onclick="CopyToClipboard('tag21307');return false;" class="tag-decoration">v2</div><div id="tag3208" onclick="CopyToClipboard('tag3208');return false;" class="tag-decoration">v2-998495f</div><div id="tag23086" onclick="CopyToClipboard('tag23086');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag26488" onclick="CopyToClipboard('tag26488');return false;" class="tag-decoration">v2-v2</div><div id="tag8204" onclick="CopyToClipboard('tag8204');return false;" class="tag-decoration">v2-v2.2</div><div id="tag18285" onclick="CopyToClipboard('tag18285');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/998495ff36553d0e78747fc226df935dcb212d51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565017364" target="_blank">2026-10-07 03:04:13</a></td></tr>
<tr><td><div id="tag27436" onclick="CopyToClipboard('tag27436');return false;" class="tag-decoration">v2-develop</div><div id="tag1191" onclick="CopyToClipboard('tag1191');return false;" class="tag-decoration">v2-develop-864f698</div><div id="tag26161" onclick="CopyToClipboard('tag26161');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag25745" onclick="CopyToClipboard('tag25745');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag2223" onclick="CopyToClipboard('tag2223');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag24118" onclick="CopyToClipboard('tag24118');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/864f6988a9f10105bb37a799e453893d57b0f6c6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37565021543" target="_blank">2026-10-07 03:04:16</a></td></tr>
<tr><td><div id="tag494" onclick="CopyToClipboard('tag494');return false;" class="tag-decoration">v3</div><div id="tag12657" onclick="CopyToClipboard('tag12657');return false;" class="tag-decoration">v3-4c2fb89</div><div id="tag24022" onclick="CopyToClipboard('tag24022');return false;" class="tag-decoration">v3-3.6.4-release.1865</div><div id="tag101" onclick="CopyToClipboard('tag101');return false;" class="tag-decoration">v3-v3</div><div id="tag6010" onclick="CopyToClipboard('tag6010');return false;" class="tag-decoration">v3-v3.6</div><div id="tag13640" onclick="CopyToClipboard('tag13640');return false;" class="tag-decoration">v3-v3.6.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4c2fb89f8b6cca7c1a5d35e271dc3880061f76fa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38173143300" target="_blank">2026-10-11 20:39:42</a></td></tr>
<tr><td><div id="tag24439" onclick="CopyToClipboard('tag24439');return false;" class="tag-decoration">v3-develop</div><div id="tag22439" onclick="CopyToClipboard('tag22439');return false;" class="tag-decoration">v3-develop-926da36</div><div id="tag20340" onclick="CopyToClipboard('tag20340');return false;" class="tag-decoration">v3-develop-3.6.5-develop.1870</div><div id="tag32177" onclick="CopyToClipboard('tag32177');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag586" onclick="CopyToClipboard('tag586');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag21843" onclick="CopyToClipboard('tag21843');return false;" class="tag-decoration">v3-develop-v3.6.5</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/926da36ee01adb7e8caa721685591cb603d540d9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/38186568976" target="_blank">2026-10-12 00:03:28</a></td></tr>
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
