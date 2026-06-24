---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag29394" onclick="CopyToClipboard('tag29394');return false;" class="tag-decoration">nightly</div><div id="tag8290" onclick="CopyToClipboard('tag8290');return false;" class="tag-decoration">nightly-e1f8f65</div><div id="tag26873" onclick="CopyToClipboard('tag26873');return false;" class="tag-decoration">nightly-f222bddf982bead457de5e53acaac1c02f1f611a</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/e1f8f652bc8002c7d4f33383bae4e25ec85aaaab" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/28078752318" target="_blank">2026-06-24 06:04:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19071" onclick="CopyToClipboard('tag19071');return false;" class="tag-decoration">release</div><div id="tag15334" onclick="CopyToClipboard('tag15334');return false;" class="tag-decoration">release-e9279b1</div><div id="tag2633" onclick="CopyToClipboard('tag2633');return false;" class="tag-decoration">release-0.31.1</div><div id="tag24873" onclick="CopyToClipboard('tag24873');return false;" class="tag-decoration">release-v0</div><div id="tag28449" onclick="CopyToClipboard('tag28449');return false;" class="tag-decoration">release-v0.31</div><div id="tag21869" onclick="CopyToClipboard('tag21869');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/e9279b1da34841eff0213bb9f660366691bf88b5" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/27971157089" target="_blank">2026-06-22 17:23:36</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
