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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12264" onclick="CopyToClipboard('tag12264');return false;" class="tag-decoration">v2</div><div id="tag21786" onclick="CopyToClipboard('tag21786');return false;" class="tag-decoration">v2-3f5ac2a</div><div id="tag15892" onclick="CopyToClipboard('tag15892');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag32606" onclick="CopyToClipboard('tag32606');return false;" class="tag-decoration">v2-v2</div><div id="tag32576" onclick="CopyToClipboard('tag32576');return false;" class="tag-decoration">v2-v2.2</div><div id="tag32653" onclick="CopyToClipboard('tag32653');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/3f5ac2a7a7d1d8938d8f7decfb8ea2b089a2c2b0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382138754" target="_blank">2026-07-28 17:16:17</a></td></tr>
<tr><td><div id="tag5823" onclick="CopyToClipboard('tag5823');return false;" class="tag-decoration">v2-develop</div><div id="tag6405" onclick="CopyToClipboard('tag6405');return false;" class="tag-decoration">v2-develop-1b91fa0</div><div id="tag4674" onclick="CopyToClipboard('tag4674');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag6388" onclick="CopyToClipboard('tag6388');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag29230" onclick="CopyToClipboard('tag29230');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag30723" onclick="CopyToClipboard('tag30723');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1b91fa0b0a1e5643fe1551eaf986f872b3de5397" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382129481" target="_blank">2026-07-28 17:16:12</a></td></tr>
<tr><td><div id="tag12904" onclick="CopyToClipboard('tag12904');return false;" class="tag-decoration">v3</div><div id="tag27947" onclick="CopyToClipboard('tag27947');return false;" class="tag-decoration">v3-cd735a5</div><div id="tag14817" onclick="CopyToClipboard('tag14817');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag15986" onclick="CopyToClipboard('tag15986');return false;" class="tag-decoration">v3-v3</div><div id="tag14291" onclick="CopyToClipboard('tag14291');return false;" class="tag-decoration">v3-v3.3</div><div id="tag6968" onclick="CopyToClipboard('tag6968');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/cd735a57cf515ba3f596f08b5b39a9c0725cffc3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30382151601" target="_blank">2026-07-28 17:16:25</a></td></tr>
<tr><td><div id="tag7209" onclick="CopyToClipboard('tag7209');return false;" class="tag-decoration">v3-develop</div><div id="tag28387" onclick="CopyToClipboard('tag28387');return false;" class="tag-decoration">v3-develop-8456282</div><div id="tag8105" onclick="CopyToClipboard('tag8105');return false;" class="tag-decoration">v3-develop-3.3.8-develop.1027</div><div id="tag5376" onclick="CopyToClipboard('tag5376');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag380" onclick="CopyToClipboard('tag380');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag12925" onclick="CopyToClipboard('tag12925');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8456282a57057764d8fd98252b051ce820f5f010" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/31271668113" target="_blank">2026-08-08 18:20:02</a></td></tr>
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
