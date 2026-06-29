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
<tr><td><div id="tag21769" onclick="CopyToClipboard('tag21769');return false;" class="tag-decoration">nightly</div><div id="tag26818" onclick="CopyToClipboard('tag26818');return false;" class="tag-decoration">nightly-d008ea8</div><div id="tag28926" onclick="CopyToClipboard('tag28926');return false;" class="tag-decoration">nightly-ebac489c8aa1fd1a004f40cbe60a9061c370b19b</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/d008ea8376132b45d26f7d30fc2741b921abe0ad" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/28391395774" target="_blank">2026-06-29 17:42:27</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9929" onclick="CopyToClipboard('tag9929');return false;" class="tag-decoration">release</div><div id="tag19818" onclick="CopyToClipboard('tag19818');return false;" class="tag-decoration">release-ddd0cff</div><div id="tag20530" onclick="CopyToClipboard('tag20530');return false;" class="tag-decoration">release-3.3.0</div><div id="tag16549" onclick="CopyToClipboard('tag16549');return false;" class="tag-decoration">release-v3</div><div id="tag25558" onclick="CopyToClipboard('tag25558');return false;" class="tag-decoration">release-v3.3</div><div id="tag22324" onclick="CopyToClipboard('tag22324');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/ddd0cff9e5961f87bde1021c1e32ad1bcc6aba95" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/28391401225" target="_blank">2026-06-29 17:42:33</a></td></tr>
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
