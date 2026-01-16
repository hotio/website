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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3076" onclick="CopyToClipboard('tag3076');return false;" class="tag-decoration">release</div><div id="tag27928" onclick="CopyToClipboard('tag27928');return false;" class="tag-decoration">release-aed24a1</div><div id="tag17338" onclick="CopyToClipboard('tag17338');return false;" class="tag-decoration">release-0.24.863</div><div id="tag26193" onclick="CopyToClipboard('tag26193');return false;" class="tag-decoration">release-v0</div><div id="tag27075" onclick="CopyToClipboard('tag27075');return false;" class="tag-decoration">release-v0.24</div><div id="tag16305" onclick="CopyToClipboard('tag16305');return false;" class="tag-decoration">release-v0.24.863</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/aed24a1c688171b449b923b7483e7dee0eb0cbb0" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21060537114" target="_blank">2026-01-16 08:33:26</a></td></tr>
<tr><td><div id="tag18043" onclick="CopyToClipboard('tag18043');return false;" class="tag-decoration">testing</div><div id="tag29073" onclick="CopyToClipboard('tag29073');return false;" class="tag-decoration">testing-05dd0cc</div><div id="tag7391" onclick="CopyToClipboard('tag7391');return false;" class="tag-decoration">testing-0.24.863</div><div id="tag12382" onclick="CopyToClipboard('tag12382');return false;" class="tag-decoration">testing-v0</div><div id="tag6216" onclick="CopyToClipboard('tag6216');return false;" class="tag-decoration">testing-v0.24</div><div id="tag3973" onclick="CopyToClipboard('tag3973');return false;" class="tag-decoration">testing-v0.24.863</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/05dd0cc83dd16da8f6c027dbe8237841d356d1f8" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21060537492" target="_blank">2026-01-16 08:33:28</a></td></tr>
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
