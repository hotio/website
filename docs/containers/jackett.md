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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22579" onclick="CopyToClipboard('tag22579');return false;" class="tag-decoration">release</div><div id="tag7435" onclick="CopyToClipboard('tag7435');return false;" class="tag-decoration">release-df39e91</div><div id="tag26674" onclick="CopyToClipboard('tag26674');return false;" class="tag-decoration">release-0.24.2910</div><div id="tag15435" onclick="CopyToClipboard('tag15435');return false;" class="tag-decoration">release-v0</div><div id="tag1445" onclick="CopyToClipboard('tag1445');return false;" class="tag-decoration">release-v0.24</div><div id="tag12265" onclick="CopyToClipboard('tag12265');return false;" class="tag-decoration">release-v0.24.2910</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/df39e9152357698e5b8b435e76da840d94668d48" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40225874021" target="_blank">2026-10-25 19:24:17</a></td></tr>
<tr><td><div id="tag14135" onclick="CopyToClipboard('tag14135');return false;" class="tag-decoration">testing</div><div id="tag5376" onclick="CopyToClipboard('tag5376');return false;" class="tag-decoration">testing-4dde9fd</div><div id="tag3277" onclick="CopyToClipboard('tag3277');return false;" class="tag-decoration">testing-0.24.2910</div><div id="tag30466" onclick="CopyToClipboard('tag30466');return false;" class="tag-decoration">testing-v0</div><div id="tag15566" onclick="CopyToClipboard('tag15566');return false;" class="tag-decoration">testing-v0.24</div><div id="tag2091" onclick="CopyToClipboard('tag2091');return false;" class="tag-decoration">testing-v0.24.2910</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/4dde9fdd5e8211c6fd4585428b7997c4f7710ec5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40225870730" target="_blank">2026-10-25 19:24:15</a></td></tr>
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
