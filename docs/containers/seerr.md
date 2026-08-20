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
<tr><td><div id="tag14148" onclick="CopyToClipboard('tag14148');return false;" class="tag-decoration">nightly</div><div id="tag4149" onclick="CopyToClipboard('tag4149');return false;" class="tag-decoration">nightly-1f53440</div><div id="tag22841" onclick="CopyToClipboard('tag22841');return false;" class="tag-decoration">nightly-059008cbb2ee0ca457ac93597d379407cb61a622</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/1f53440ece07d07f8c6ab342710aade489695166" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/32326720515" target="_blank">2026-08-20 03:01:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20540" onclick="CopyToClipboard('tag20540');return false;" class="tag-decoration">release</div><div id="tag4940" onclick="CopyToClipboard('tag4940');return false;" class="tag-decoration">release-323eb59</div><div id="tag28341" onclick="CopyToClipboard('tag28341');return false;" class="tag-decoration">release-3.4.1</div><div id="tag29519" onclick="CopyToClipboard('tag29519');return false;" class="tag-decoration">release-v3</div><div id="tag27371" onclick="CopyToClipboard('tag27371');return false;" class="tag-decoration">release-v3.4</div><div id="tag24731" onclick="CopyToClipboard('tag24731');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/323eb5941b7e0708a8d9a20f956e3f90772b7890" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/32326706551" target="_blank">2026-08-20 03:00:58</a></td></tr>
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
