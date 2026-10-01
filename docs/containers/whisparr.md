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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2902" onclick="CopyToClipboard('tag2902');return false;" class="tag-decoration">v2</div><div id="tag5472" onclick="CopyToClipboard('tag5472');return false;" class="tag-decoration">v2-c75114f</div><div id="tag21014" onclick="CopyToClipboard('tag21014');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag29664" onclick="CopyToClipboard('tag29664');return false;" class="tag-decoration">v2-v2</div><div id="tag21063" onclick="CopyToClipboard('tag21063');return false;" class="tag-decoration">v2-v2.2</div><div id="tag552" onclick="CopyToClipboard('tag552');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/c75114fed8467f31908ecd749daa2c815a431553" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36928997579" target="_blank">2026-10-01 21:29:11</a></td></tr>
<tr><td><div id="tag893" onclick="CopyToClipboard('tag893');return false;" class="tag-decoration">v2-develop</div><div id="tag21876" onclick="CopyToClipboard('tag21876');return false;" class="tag-decoration">v2-develop-4def09c</div><div id="tag17562" onclick="CopyToClipboard('tag17562');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag32119" onclick="CopyToClipboard('tag32119');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag15053" onclick="CopyToClipboard('tag15053');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag21895" onclick="CopyToClipboard('tag21895');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4def09cc06e3392dc31e9f917e1383772de5c930" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36928998437" target="_blank">2026-10-01 21:29:13</a></td></tr>
<tr><td><div id="tag2319" onclick="CopyToClipboard('tag2319');return false;" class="tag-decoration">v3</div><div id="tag3777" onclick="CopyToClipboard('tag3777');return false;" class="tag-decoration">v3-7554ee1</div><div id="tag32583" onclick="CopyToClipboard('tag32583');return false;" class="tag-decoration">v3-3.6.2-release.1727</div><div id="tag13615" onclick="CopyToClipboard('tag13615');return false;" class="tag-decoration">v3-v3</div><div id="tag14185" onclick="CopyToClipboard('tag14185');return false;" class="tag-decoration">v3-v3.6</div><div id="tag28021" onclick="CopyToClipboard('tag28021');return false;" class="tag-decoration">v3-v3.6.2</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7554ee1c721bdd3e611e58d5a56241a9c0d0d985" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36928999340" target="_blank">2026-10-01 21:29:13</a></td></tr>
<tr><td><div id="tag26997" onclick="CopyToClipboard('tag26997');return false;" class="tag-decoration">v3-develop</div><div id="tag5395" onclick="CopyToClipboard('tag5395');return false;" class="tag-decoration">v3-develop-b9acaac</div><div id="tag18648" onclick="CopyToClipboard('tag18648');return false;" class="tag-decoration">v3-develop-3.6.3-develop.1777</div><div id="tag31038" onclick="CopyToClipboard('tag31038');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag3720" onclick="CopyToClipboard('tag3720');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag14283" onclick="CopyToClipboard('tag14283');return false;" class="tag-decoration">v3-develop-v3.6.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b9acaac1defc2c9f44d2cd8f720530ac23671845" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/36929015366" target="_blank">2026-10-01 21:29:23</a></td></tr>
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
