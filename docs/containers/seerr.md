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
<tr><td><div id="tag22136" onclick="CopyToClipboard('tag22136');return false;" class="tag-decoration">nightly</div><div id="tag24737" onclick="CopyToClipboard('tag24737');return false;" class="tag-decoration">nightly-cfd63b4</div><div id="tag7390" onclick="CopyToClipboard('tag7390');return false;" class="tag-decoration">nightly-92f8404326cf6d8b1c3a9412dbfc6011e26f4112</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/cfd63b4588074d267c617c7bed82721caf6949aa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/32890456232" target="_blank">2026-08-25 19:35:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29584" onclick="CopyToClipboard('tag29584');return false;" class="tag-decoration">release</div><div id="tag15982" onclick="CopyToClipboard('tag15982');return false;" class="tag-decoration">release-323eb59</div><div id="tag15992" onclick="CopyToClipboard('tag15992');return false;" class="tag-decoration">release-3.4.1</div><div id="tag11981" onclick="CopyToClipboard('tag11981');return false;" class="tag-decoration">release-v3</div><div id="tag1653" onclick="CopyToClipboard('tag1653');return false;" class="tag-decoration">release-v3.4</div><div id="tag32439" onclick="CopyToClipboard('tag32439');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/323eb5941b7e0708a8d9a20f956e3f90772b7890" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/32326706551" target="_blank">2026-08-20 03:00:58</a></td></tr>
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
