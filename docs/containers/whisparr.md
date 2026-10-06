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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13181" onclick="CopyToClipboard('tag13181');return false;" class="tag-decoration">v2</div><div id="tag30955" onclick="CopyToClipboard('tag30955');return false;" class="tag-decoration">v2-c75114f</div><div id="tag6794" onclick="CopyToClipboard('tag6794');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag14298" onclick="CopyToClipboard('tag14298');return false;" class="tag-decoration">v2-v2</div><div id="tag29687" onclick="CopyToClipboard('tag29687');return false;" class="tag-decoration">v2-v2.2</div><div id="tag30974" onclick="CopyToClipboard('tag30974');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/c75114fed8467f31908ecd749daa2c815a431553" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36928997579" target="_blank">2026-10-01 21:29:11</a></td></tr>
<tr><td><div id="tag1746" onclick="CopyToClipboard('tag1746');return false;" class="tag-decoration">v2-develop</div><div id="tag1581" onclick="CopyToClipboard('tag1581');return false;" class="tag-decoration">v2-develop-c580781</div><div id="tag23645" onclick="CopyToClipboard('tag23645');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag27513" onclick="CopyToClipboard('tag27513');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag21641" onclick="CopyToClipboard('tag21641');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag20131" onclick="CopyToClipboard('tag20131');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c580781debaa28a96ee140554b4926957ce1eab7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37426853595" target="_blank">2026-10-06 06:58:48</a></td></tr>
<tr><td><div id="tag13621" onclick="CopyToClipboard('tag13621');return false;" class="tag-decoration">v3</div><div id="tag6622" onclick="CopyToClipboard('tag6622');return false;" class="tag-decoration">v3-816c8e5</div><div id="tag21663" onclick="CopyToClipboard('tag21663');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag15798" onclick="CopyToClipboard('tag15798');return false;" class="tag-decoration">v3-v3</div><div id="tag4900" onclick="CopyToClipboard('tag4900');return false;" class="tag-decoration">v3-v3.6</div><div id="tag18202" onclick="CopyToClipboard('tag18202');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/816c8e5d9e5434c74787b281ef663b6696d570eb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/37426852007" target="_blank">2026-10-06 06:58:47</a></td></tr>
<tr><td><div id="tag19074" onclick="CopyToClipboard('tag19074');return false;" class="tag-decoration">v3-develop</div><div id="tag23122" onclick="CopyToClipboard('tag23122');return false;" class="tag-decoration">v3-develop-b9acaac</div><div id="tag30364" onclick="CopyToClipboard('tag30364');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag22534" onclick="CopyToClipboard('tag22534');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag4598" onclick="CopyToClipboard('tag4598');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag3726" onclick="CopyToClipboard('tag3726');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b9acaac1defc2c9f44d2cd8f720530ac23671845" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36929015366" target="_blank">2026-10-01 21:29:23</a></td></tr>
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
