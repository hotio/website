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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23296" onclick="CopyToClipboard('tag23296');return false;" class="tag-decoration">v2</div><div id="tag18550" onclick="CopyToClipboard('tag18550');return false;" class="tag-decoration">v2-aa0f0d2</div><div id="tag1120" onclick="CopyToClipboard('tag1120');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag18632" onclick="CopyToClipboard('tag18632');return false;" class="tag-decoration">v2-v2</div><div id="tag14241" onclick="CopyToClipboard('tag14241');return false;" class="tag-decoration">v2-v2.2</div><div id="tag24721" onclick="CopyToClipboard('tag24721');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/aa0f0d26e4d2f049b755c376d333254de06c29ae" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496182974" target="_blank">2026-09-10 15:31:17</a></td></tr>
<tr><td><div id="tag5629" onclick="CopyToClipboard('tag5629');return false;" class="tag-decoration">v2-develop</div><div id="tag21202" onclick="CopyToClipboard('tag21202');return false;" class="tag-decoration">v2-develop-3750138</div><div id="tag6217" onclick="CopyToClipboard('tag6217');return false;" class="tag-decoration">v2-develop-2.2.0-develop.336</div><div id="tag1391" onclick="CopyToClipboard('tag1391');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag7776" onclick="CopyToClipboard('tag7776');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag2263" onclick="CopyToClipboard('tag2263');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3750138b91028baee846aea25840cdb105dd66ee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496177853" target="_blank">2026-09-10 15:31:14</a></td></tr>
<tr><td><div id="tag30071" onclick="CopyToClipboard('tag30071');return false;" class="tag-decoration">v3</div><div id="tag6198" onclick="CopyToClipboard('tag6198');return false;" class="tag-decoration">v3-70ef522</div><div id="tag29932" onclick="CopyToClipboard('tag29932');return false;" class="tag-decoration">v3-3.5.0-release.1585</div><div id="tag28190" onclick="CopyToClipboard('tag28190');return false;" class="tag-decoration">v3-v3</div><div id="tag1222" onclick="CopyToClipboard('tag1222');return false;" class="tag-decoration">v3-v3.5</div><div id="tag4426" onclick="CopyToClipboard('tag4426');return false;" class="tag-decoration">v3-v3.5.0</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/70ef52211c01fbf7244fc912f128af3db4311133" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496194322" target="_blank">2026-09-10 15:31:23</a></td></tr>
<tr><td><div id="tag6952" onclick="CopyToClipboard('tag6952');return false;" class="tag-decoration">v3-develop</div><div id="tag17504" onclick="CopyToClipboard('tag17504');return false;" class="tag-decoration">v3-develop-3d0f521</div><div id="tag29319" onclick="CopyToClipboard('tag29319');return false;" class="tag-decoration">v3-develop-3.5.0-develop.1591</div><div id="tag28345" onclick="CopyToClipboard('tag28345');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag9110" onclick="CopyToClipboard('tag9110');return false;" class="tag-decoration">v3-develop-v3.5</div><div id="tag18931" onclick="CopyToClipboard('tag18931');return false;" class="tag-decoration">v3-develop-v3.5.0</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3d0f521d56a683594f8aa9743b88858aca151c62" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/34496173472" target="_blank">2026-09-10 15:31:12</a></td></tr>
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
