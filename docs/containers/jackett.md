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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2303" onclick="CopyToClipboard('tag2303');return false;" class="tag-decoration">release</div><div id="tag9147" onclick="CopyToClipboard('tag9147');return false;" class="tag-decoration">release-2d46149</div><div id="tag29073" onclick="CopyToClipboard('tag29073');return false;" class="tag-decoration">release-0.24.2142</div><div id="tag7513" onclick="CopyToClipboard('tag7513');return false;" class="tag-decoration">release-v0</div><div id="tag20321" onclick="CopyToClipboard('tag20321');return false;" class="tag-decoration">release-v0.24</div><div id="tag24429" onclick="CopyToClipboard('tag24429');return false;" class="tag-decoration">release-v0.24.2142</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/2d461490e4c20d766d78fb464c8954cf4dac4bba" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28437650591" target="_blank">2026-06-30 10:27:01</a></td></tr>
<tr><td><div id="tag13092" onclick="CopyToClipboard('tag13092');return false;" class="tag-decoration">testing</div><div id="tag9816" onclick="CopyToClipboard('tag9816');return false;" class="tag-decoration">testing-686a9b7</div><div id="tag26831" onclick="CopyToClipboard('tag26831');return false;" class="tag-decoration">testing-0.24.2142</div><div id="tag16758" onclick="CopyToClipboard('tag16758');return false;" class="tag-decoration">testing-v0</div><div id="tag17267" onclick="CopyToClipboard('tag17267');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11411" onclick="CopyToClipboard('tag11411');return false;" class="tag-decoration">testing-v0.24.2142</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/686a9b76f05ed3fad010118f7e1082681eda335e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28437651243" target="_blank">2026-06-30 10:27:02</a></td></tr>
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
