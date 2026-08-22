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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20952" onclick="CopyToClipboard('tag20952');return false;" class="tag-decoration">release</div><div id="tag19421" onclick="CopyToClipboard('tag19421');return false;" class="tag-decoration">release-1fe2f54</div><div id="tag9393" onclick="CopyToClipboard('tag9393');return false;" class="tag-decoration">release-0.24.2440</div><div id="tag20357" onclick="CopyToClipboard('tag20357');return false;" class="tag-decoration">release-v0</div><div id="tag2989" onclick="CopyToClipboard('tag2989');return false;" class="tag-decoration">release-v0.24</div><div id="tag970" onclick="CopyToClipboard('tag970');return false;" class="tag-decoration">release-v0.24.2440</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/1fe2f54df611935e52a1ab7c5e061472c41ddcfb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32556892952" target="_blank">2026-08-22 06:24:33</a></td></tr>
<tr><td><div id="tag7861" onclick="CopyToClipboard('tag7861');return false;" class="tag-decoration">testing</div><div id="tag22195" onclick="CopyToClipboard('tag22195');return false;" class="tag-decoration">testing-7833b81</div><div id="tag24436" onclick="CopyToClipboard('tag24436');return false;" class="tag-decoration">testing-0.24.2440</div><div id="tag5211" onclick="CopyToClipboard('tag5211');return false;" class="tag-decoration">testing-v0</div><div id="tag14887" onclick="CopyToClipboard('tag14887');return false;" class="tag-decoration">testing-v0.24</div><div id="tag29887" onclick="CopyToClipboard('tag29887');return false;" class="tag-decoration">testing-v0.24.2440</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7833b814b4fe0d46b336bace426304212f71f8f1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32556899086" target="_blank">2026-08-22 06:24:42</a></td></tr>
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
