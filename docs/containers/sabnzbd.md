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
<tr><td><div id="tag21484" onclick="CopyToClipboard('tag21484');return false;" class="tag-decoration">nightly</div><div id="tag19862" onclick="CopyToClipboard('tag19862');return false;" class="tag-decoration">nightly-fe8cf00</div><div id="tag16803" onclick="CopyToClipboard('tag16803');return false;" class="tag-decoration">nightly-9748bcf63f38035074d6cfad6a407812c3da59d7</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/fe8cf00b438d46e71f06f20cdf89ad82f8185293" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39250100777" target="_blank">2026-10-19 12:11:14</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13454" onclick="CopyToClipboard('tag13454');return false;" class="tag-decoration">release</div><div id="tag3466" onclick="CopyToClipboard('tag3466');return false;" class="tag-decoration">release-9738b61</div><div id="tag18561" onclick="CopyToClipboard('tag18561');return false;" class="tag-decoration">release-5.1.3</div><div id="tag29731" onclick="CopyToClipboard('tag29731');return false;" class="tag-decoration">release-v5</div><div id="tag28801" onclick="CopyToClipboard('tag28801');return false;" class="tag-decoration">release-v5.1</div><div id="tag20188" onclick="CopyToClipboard('tag20188');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/9738b61d32dea7aa0ca756a58ffc7ea10194a884" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39135387250" target="_blank">2026-10-18 14:18:16</a></td></tr>
<tr><td><div id="tag21154" onclick="CopyToClipboard('tag21154');return false;" class="tag-decoration">testing</div><div id="tag30373" onclick="CopyToClipboard('tag30373');return false;" class="tag-decoration">testing-3392294</div><div id="tag13114" onclick="CopyToClipboard('tag13114');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/3392294d4213341a00b010bfc37737f18fd4b752" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/39478840083" target="_blank">2026-10-20 18:54:26</a></td></tr>
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
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
