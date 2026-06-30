---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag1496" onclick="CopyToClipboard('tag1496');return false;" class="tag-decoration">nightly</div><div id="tag12240" onclick="CopyToClipboard('tag12240');return false;" class="tag-decoration">nightly-cab4922</div><div id="tag7690" onclick="CopyToClipboard('tag7690');return false;" class="tag-decoration">nightly-ebac489c8aa1fd1a004f40cbe60a9061c370b19b</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/cab4922495b64edb897543bf11cb4e6f7d2984ea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/28443440987" target="_blank">2026-06-30 12:13:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7860" onclick="CopyToClipboard('tag7860');return false;" class="tag-decoration">release</div><div id="tag27972" onclick="CopyToClipboard('tag27972');return false;" class="tag-decoration">release-ddd0cff</div><div id="tag28809" onclick="CopyToClipboard('tag28809');return false;" class="tag-decoration">release-3.3.0</div><div id="tag9157" onclick="CopyToClipboard('tag9157');return false;" class="tag-decoration">release-v3</div><div id="tag14195" onclick="CopyToClipboard('tag14195');return false;" class="tag-decoration">release-v3.3</div><div id="tag29446" onclick="CopyToClipboard('tag29446');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/ddd0cff9e5961f87bde1021c1e32ad1bcc6aba95" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/28391401225" target="_blank">2026-06-29 17:42:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
