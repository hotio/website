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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3736" onclick="CopyToClipboard('tag3736');return false;" class="tag-decoration">release</div><div id="tag31256" onclick="CopyToClipboard('tag31256');return false;" class="tag-decoration">release-74896e9</div><div id="tag14077" onclick="CopyToClipboard('tag14077');return false;" class="tag-decoration">release-0.24.2918</div><div id="tag6145" onclick="CopyToClipboard('tag6145');return false;" class="tag-decoration">release-v0</div><div id="tag24908" onclick="CopyToClipboard('tag24908');return false;" class="tag-decoration">release-v0.24</div><div id="tag20510" onclick="CopyToClipboard('tag20510');return false;" class="tag-decoration">release-v0.24.2918</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/74896e925b06a8ab21dac281caf53239c158eec0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40319027039" target="_blank">2026-10-26 11:58:35</a></td></tr>
<tr><td><div id="tag17288" onclick="CopyToClipboard('tag17288');return false;" class="tag-decoration">testing</div><div id="tag12457" onclick="CopyToClipboard('tag12457');return false;" class="tag-decoration">testing-4dde9fd</div><div id="tag5123" onclick="CopyToClipboard('tag5123');return false;" class="tag-decoration">testing-0.24.2910</div><div id="tag29012" onclick="CopyToClipboard('tag29012');return false;" class="tag-decoration">testing-v0</div><div id="tag13137" onclick="CopyToClipboard('tag13137');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9666" onclick="CopyToClipboard('tag9666');return false;" class="tag-decoration">testing-v0.24.2910</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/4dde9fdd5e8211c6fd4585428b7997c4f7710ec5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40225870730" target="_blank">2026-10-25 19:24:15</a></td></tr>
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
