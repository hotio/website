---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag13121" onclick="CopyToClipboard('tag13121');return false;" class="tag-decoration">nightly</div><div id="tag13569" onclick="CopyToClipboard('tag13569');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div><div id="tag4635" onclick="CopyToClipboard('tag4635');return false;" class="tag-decoration">nightly-f9ad43b</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/f9ad43b356e3aa6fdeafe51c685827b36e3c985c" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20898168862" target="_blank">2026-01-11 16:17:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag465" onclick="CopyToClipboard('tag465');return false;" class="tag-decoration">release</div><div id="tag11799" onclick="CopyToClipboard('tag11799');return false;" class="tag-decoration">release-0.14.5</div><div id="tag23816" onclick="CopyToClipboard('tag23816');return false;" class="tag-decoration">release-ac72a00</div><div id="tag3604" onclick="CopyToClipboard('tag3604');return false;" class="tag-decoration">release-v0</div><div id="tag8705" onclick="CopyToClipboard('tag8705');return false;" class="tag-decoration">release-v0.14</div><div id="tag18328" onclick="CopyToClipboard('tag18328');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/ac72a001245a5a8779cc00a5fd89b87fb4318935" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20895148612" target="_blank">2026-01-11 12:29:30</a></td></tr>
<tr><td><div id="tag9075" onclick="CopyToClipboard('tag9075');return false;" class="tag-decoration">testing</div><div id="tag4392" onclick="CopyToClipboard('tag4392');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag22392" onclick="CopyToClipboard('tag22392');return false;" class="tag-decoration">testing-ea13ded</div><div id="tag8190" onclick="CopyToClipboard('tag8190');return false;" class="tag-decoration">testing-v0</div><div id="tag1364" onclick="CopyToClipboard('tag1364');return false;" class="tag-decoration">testing-v0.14</div><div id="tag1375" onclick="CopyToClipboard('tag1375');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/ea13ded8349639f9cd5ee6746262e2f27638b0e2" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20895148749" target="_blank">2026-01-11 12:29:31</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
