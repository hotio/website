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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4648" onclick="CopyToClipboard('tag4648');return false;" class="tag-decoration">release</div><div id="tag3958" onclick="CopyToClipboard('tag3958');return false;" class="tag-decoration">release-dcf6e6e</div><div id="tag20361" onclick="CopyToClipboard('tag20361');return false;" class="tag-decoration">release-2.18.2</div><div id="tag3525" onclick="CopyToClipboard('tag3525');return false;" class="tag-decoration">release-v2</div><div id="tag29310" onclick="CopyToClipboard('tag29310');return false;" class="tag-decoration">release-v2.18</div><div id="tag9247" onclick="CopyToClipboard('tag9247');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/dcf6e6e90fa0ece12de22b37c3e4660bac4f27d2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/40228883566" target="_blank">2026-10-25 20:02:31</a></td></tr>
<tr><td><div id="tag2646" onclick="CopyToClipboard('tag2646');return false;" class="tag-decoration">testing</div><div id="tag17528" onclick="CopyToClipboard('tag17528');return false;" class="tag-decoration">testing-37e82d9</div><div id="tag17461" onclick="CopyToClipboard('tag17461');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag24051" onclick="CopyToClipboard('tag24051');return false;" class="tag-decoration">testing-v2</div><div id="tag7521" onclick="CopyToClipboard('tag7521');return false;" class="tag-decoration">testing-v2.18</div><div id="tag18258" onclick="CopyToClipboard('tag18258');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/37e82d9f7ffd5dec9bfa26540a57c17a6e5f5809" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/40228882235" target="_blank">2026-10-25 20:02:30</a></td></tr>
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
