---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag17514" onclick="CopyToClipboard('tag17514');return false;" class="tag-decoration">nightly</div><div id="tag17213" onclick="CopyToClipboard('tag17213');return false;" class="tag-decoration">nightly-8dc3605</div><div id="tag7339" onclick="CopyToClipboard('tag7339');return false;" class="tag-decoration">nightly-5b3a8fcd3f8586c00c8d38b45f3d4d65d5bd122a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/8dc36058c09f96d4791ecd0c0777aef7bd557b97" target="_blank">Version update: 44447ab4168866cfa83615d5c7bd4ba8e2aa3d53 => 5b3a8fcd3f8586c00c8d38b45f3d4d65d5bd122a</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21524045208" target="_blank">2026-01-30 17:07:52</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31269" onclick="CopyToClipboard('tag31269');return false;" class="tag-decoration">release</div><div id="tag22322" onclick="CopyToClipboard('tag22322');return false;" class="tag-decoration">release-46290ae</div><div id="tag30668" onclick="CopyToClipboard('tag30668');return false;" class="tag-decoration">release-4.5.5</div><div id="tag29249" onclick="CopyToClipboard('tag29249');return false;" class="tag-decoration">release-v4</div><div id="tag2800" onclick="CopyToClipboard('tag2800');return false;" class="tag-decoration">release-v4.5</div><div id="tag29299" onclick="CopyToClipboard('tag29299');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/46290ae916da9d974f41c8d444cc12ecb070f01e" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21428866181" target="_blank">2026-01-28 07:15:20</a></td></tr>
<tr><td><div id="tag13425" onclick="CopyToClipboard('tag13425');return false;" class="tag-decoration">testing</div><div id="tag29361" onclick="CopyToClipboard('tag29361');return false;" class="tag-decoration">testing-363f694</div><div id="tag2071" onclick="CopyToClipboard('tag2071');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/363f694252cadc404799128d88fbba2a28c03c91" target="_blank">Upstream update: alpinevpn-24b1ed4 => alpinevpn-e5bbee4</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21428866881" target="_blank">2026-01-28 07:15:22</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
