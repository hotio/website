---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28017" onclick="CopyToClipboard('tag28017');return false;" class="tag-decoration">release</div><div id="tag23379" onclick="CopyToClipboard('tag23379');return false;" class="tag-decoration">release-61658f9</div><div id="tag11158" onclick="CopyToClipboard('tag11158');return false;" class="tag-decoration">release-0.24.2738</div><div id="tag25442" onclick="CopyToClipboard('tag25442');return false;" class="tag-decoration">release-v0</div><div id="tag29478" onclick="CopyToClipboard('tag29478');return false;" class="tag-decoration">release-v0.24</div><div id="tag5785" onclick="CopyToClipboard('tag5785');return false;" class="tag-decoration">release-v0.24.2738</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/61658f90b9ffcd125fcfe9cd3d9f7e1d6998c2b2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/36700471588" target="_blank">2026-09-30 10:07:25</a></td></tr>
<tr><td><div id="tag21623" onclick="CopyToClipboard('tag21623');return false;" class="tag-decoration">testing</div><div id="tag9911" onclick="CopyToClipboard('tag9911');return false;" class="tag-decoration">testing-4f97273</div><div id="tag23333" onclick="CopyToClipboard('tag23333');return false;" class="tag-decoration">testing-0.24.2713</div><div id="tag27622" onclick="CopyToClipboard('tag27622');return false;" class="tag-decoration">testing-v0</div><div id="tag15014" onclick="CopyToClipboard('tag15014');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22475" onclick="CopyToClipboard('tag22475');return false;" class="tag-decoration">testing-v0.24.2713</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/4f97273e33918110dfb65119d13bb49807dfc008" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/36531075845" target="_blank">2026-09-29 06:26:28</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
