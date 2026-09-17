---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12136" onclick="CopyToClipboard('tag12136');return false;" class="tag-decoration">release</div><div id="tag7905" onclick="CopyToClipboard('tag7905');return false;" class="tag-decoration">release-0fb87cf</div><div id="tag30192" onclick="CopyToClipboard('tag30192');return false;" class="tag-decoration">release-2.18.1</div><div id="tag19477" onclick="CopyToClipboard('tag19477');return false;" class="tag-decoration">release-v2</div><div id="tag28412" onclick="CopyToClipboard('tag28412');return false;" class="tag-decoration">release-v2.18</div><div id="tag1039" onclick="CopyToClipboard('tag1039');return false;" class="tag-decoration">release-v2.18.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/0fb87cf65643de9f8870dcac5004f5662ebace7b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35251995039" target="_blank">2026-09-17 17:19:07</a></td></tr>
<tr><td><div id="tag20973" onclick="CopyToClipboard('tag20973');return false;" class="tag-decoration">testing</div><div id="tag18420" onclick="CopyToClipboard('tag18420');return false;" class="tag-decoration">testing-4b25754</div><div id="tag22345" onclick="CopyToClipboard('tag22345');return false;" class="tag-decoration">testing-2.18.1</div><div id="tag9630" onclick="CopyToClipboard('tag9630');return false;" class="tag-decoration">testing-v2</div><div id="tag17375" onclick="CopyToClipboard('tag17375');return false;" class="tag-decoration">testing-v2.18</div><div id="tag24879" onclick="CopyToClipboard('tag24879');return false;" class="tag-decoration">testing-v2.18.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/4b25754db8fc1948bc75a0d8d5924a3acd0913d8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/35251989310" target="_blank">2026-09-17 17:19:03</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
