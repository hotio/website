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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14588" onclick="CopyToClipboard('tag14588');return false;" class="tag-decoration">v2</div><div id="tag10515" onclick="CopyToClipboard('tag10515');return false;" class="tag-decoration">v2-465f095</div><div id="tag90" onclick="CopyToClipboard('tag90');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag22169" onclick="CopyToClipboard('tag22169');return false;" class="tag-decoration">v2-v2</div><div id="tag7861" onclick="CopyToClipboard('tag7861');return false;" class="tag-decoration">v2-v2.3</div><div id="tag2813" onclick="CopyToClipboard('tag2813');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/465f0956b267fabf6006289908305827f559832b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493225430" target="_blank">2026-11-24 21:38:58</a></td></tr>
<tr><td><div id="tag27358" onclick="CopyToClipboard('tag27358');return false;" class="tag-decoration">v2-develop</div><div id="tag13455" onclick="CopyToClipboard('tag13455');return false;" class="tag-decoration">v2-develop-174c47c</div><div id="tag27198" onclick="CopyToClipboard('tag27198');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag17314" onclick="CopyToClipboard('tag17314');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag27869" onclick="CopyToClipboard('tag27869');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag18811" onclick="CopyToClipboard('tag18811');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/174c47ca2300594f263955e22c187e40977fbb21" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45386947754" target="_blank">2026-11-24 11:44:29</a></td></tr>
<tr><td><div id="tag29680" onclick="CopyToClipboard('tag29680');return false;" class="tag-decoration">v3</div><div id="tag4033" onclick="CopyToClipboard('tag4033');return false;" class="tag-decoration">v3-7c2d3f4</div><div id="tag23234" onclick="CopyToClipboard('tag23234');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag21309" onclick="CopyToClipboard('tag21309');return false;" class="tag-decoration">v3-v3</div><div id="tag14820" onclick="CopyToClipboard('tag14820');return false;" class="tag-decoration">v3-v3.6</div><div id="tag7222" onclick="CopyToClipboard('tag7222');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7c2d3f4e4a232f6c2d4063046a1f10b06dce812a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45386952743" target="_blank">2026-11-24 11:44:31</a></td></tr>
<tr><td><div id="tag1620" onclick="CopyToClipboard('tag1620');return false;" class="tag-decoration">v3-develop</div><div id="tag20375" onclick="CopyToClipboard('tag20375');return false;" class="tag-decoration">v3-develop-71adccf</div><div id="tag25361" onclick="CopyToClipboard('tag25361');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag2425" onclick="CopyToClipboard('tag2425');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag28973" onclick="CopyToClipboard('tag28973');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag22456" onclick="CopyToClipboard('tag22456');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/71adccf0ad4f02baef2151c60c61f587e030a481" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45386950302" target="_blank">2026-11-24 11:44:30</a></td></tr>
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
